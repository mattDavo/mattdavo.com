## How to Symbolize OSX Crash Logs
Unfortunately, xcode does not yet have support for importing OSX crash logs and symbolizing them. Therefore, you must use the command line and a little bit of manual work.

1. **Find your dSYM file.**
    1. Assuming you are using xcode's *archive* functionality, open the *Organizer* window from the *Window* menu.
    2. Click the *Archives* tab.
    3. Right click on the appropriate build and select *Show in Finder*.
    4. When Finder opens, right click on the selected archive and select *Show Package Contents*.
    5. Navigate to the *dSYM* directory and copy the appropriate dSYM file to a temporary directory.
    6. Then navigate to *Products*, then *Applications*, and copy the app file to the same temporary directory.
2. **Navigate to your temporary directory in the *Terminal* app.**
3. **Check to make sure you have the right build.**
    1. Run `xcrun dwarfdump --uuid MyApp.app/Contents/MacOS/MyApp` replacing *MyApp* as appropriate. Output should look like:

            UUID: 2421317E-79BF-3738-B831-77E365D6BD34 (x86_64) MyApp.app/Contents/MacOS/MyApp

    2. In the crash report, find your app in the *Binary Images* section. The line will look something like:

            0x103184000 -        0x10319eff7 +com.Awesomesauce.MyApp (1.0 - 3) <2421317E-79BF-3738-B831-77E365D6BD34> /Applications/MyApp.app/Contents/MacOS/MyApp

    3. The part in the angle brackets is the UUID... verify that it matches the output of dwarfdump. If not, you're looking at the wrong build. The version number is in parentheses - that may help you find the right build.
4. **Find the load address in the crash report.** Find your app in the *Binary Images* section. The first number is the load address. In the example above, the load address is `0x103184000`.
5. **Find the address that you are interested in knowing more about.**
    1. First find where the app crashed in the crash log. If you have a section called *Application Specific Backtrace*, that's a likely place to look. Otherwise, find which thread crashed (there will be a section that says *Thread X Crashed*, where X is a number).
    2. Find the first address that happened within your app... For example, if you have an *Application Specific Backtrace*, it may look something like:

            Application Specific Backtrace 1:
            0   CoreFoundation                      0x00007fff88d5b25c __exceptionPreprocess + 172
            1   libobjc.A.dylib                     0x00007fff837cfe75 objc_exception_throw + 43
            2   CoreFoundation                      0x00007fff88c5ae81 -[__NSPlaceholderDictionary initWithObjects:forKeys:count:] + 385
            3   CoreFoundation                      0x00007fff88c70b89 +[NSDictionary dictionaryWithObjects:forKeys:count:] + 57
            4   MyApp                               0x000000010afb2f1b MyApp + 32539
            5   MyApp                               0x000000010afb8758 MyApp + 55128
            ... etc ...

        In this case, `0x000000010afb2f1b` looks interesting. If all you have is a thread that crashed, it might look like this instead:

            Thread 0 Crashed:: Dispatch queue: com.apple.main-thread
            0   libobjc.A.dylib               	0x00007fff837c97aa objc_retain + 26
            1   com.Awesomesauce.MyApp        	0x000000010318e964 0x103184000 + 43364
            2   libdispatch.dylib             	0x00007fff891f41bb _dispatch_call_block_and_release + 12
            3   libdispatch.dylib             	0x00007fff891f128d _dispatch_client_callout + 8

        `0x000000010318e964` looks pretty interesting in this case.

6. **Run atos to get information about that address.** Your command will look something like:

        atos -o MyApp.app/Contents/MacOS/MyApp -arch x86_64 -l 0x103184000 0x000000010318e964

    `0x103184000` is the load address we found in step 4, and `0x000000010318e964` is the address we're interested in knowing more about. The output should look something like:

        got symbolicator for MyApp.app/Contents/MacOS/MyApp, base address 100000000
        __36-[SRWebSocket _HTTPHeadersDidFinish]_block_invoke (in MyApp) (SRWebSocket.m:492)

    *atos* uses information in the dSYM file to find the exact file and line number that caused the problem in our app!

7. **Repeat.** If this isn't enough information for you, try poking around at different addresses earlier in the stack trace from your crash log.
