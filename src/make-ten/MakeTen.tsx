import React, { KeyboardEvent } from 'react';

import './MakeTen.css';

interface IState {
    content: string;
}

class MakeTen extends React.Component<{}, IState> {
    static validateNumber(evt: KeyboardEvent<HTMLInputElement>) {
    // https://stackoverflow.com/a/12142807
        const e = evt || window.event;
        const key = e.keyCode || e.which;
        if (
            !e.shiftKey
      && !e.altKey
      && !e.ctrlKey
      // numbers
      && ((key >= 48 && key <= 57)
        // Numeric keypad
        || (key >= 96 && key <= 105)
        // Backspace and Tab and Enter
        || key === 8
        || key === 9
        || key === 13
        // Home and End
        || key === 35
        || key === 36
        // left and right arrows
        || key === 37
        || key === 39
        // Del and Ins
        || key === 46
        || key === 45)
        ) {
            // input is VALID
        } else if (e.preventDefault) {
            // input is INVALID
            e.preventDefault();
        }
    }

    static isSolveable(puzzle: number[], target = 10) {
        const n = Array.from(puzzle).length;

        const subProblems = Array<number[][]>(n);
        for (let i = 0; i < n; i += 1) {
            subProblems[i] = Array(n);
            // sub_problems[i] = sub_problems[i].map(_ => {return ["a"]});
            for (let j = 0; j < n; j += 1) {
                subProblems[i][j] = Array(0);
            }
        }

        for (let width = 1; width < n + 1; width += 1) {
            for (let i = 0; i < n - width + 1; i += 1) {
                const j = i + width - 1;

                if (width === 1) {
                    subProblems[i][j].push(puzzle[i]);
                    subProblems[i][j].push(-puzzle[i]);
                } else {
                    for (let k = i; k < j; k += 1) {
                        const l1 = subProblems[i][k];
                        const l2 = subProblems[k + 1][j];

                        const l1l2: number[][] = [];
                        l1.forEach((x) => {
                            l2.forEach((y) => {
                                l1l2.push([x, y]);
                            });
                        });

                        l1l2.forEach((x) => {
                            const a = x[0];
                            const b = x[1];
                            subProblems[i][j].push(a + b);
                            subProblems[i][j].push(a - b);
                            subProblems[i][j].push(a * b);
                            if (b !== 0) {
                                subProblems[i][j].push(a / b);
                            }
                        });

                        subProblems[i][j] = [
                            ...Array.from(new Set(subProblems[i][j])),
                        ];
                    }
                }
            }
        }

        if (Array.from(subProblems[0][n - 1]).includes(target)) {
            return true;
        }
        return false;
    }

    // inputRef: React.RefObject;

    constructor(props: {}) {
        super(props);

        // this.inputRef = React.createRef();
        this.state = {
            content: 'empty',
        };
    }

    render() {
        let textContent = 'Enter 4 digits';
        let className = 'title';
        const { content } = this.state;

        if (content === 'solveable') {
            className += ' train-solution';
            textContent = 'Solveable!';
        } else if (content === 'unsolveable') {
            className += ' train-no-solution';
            textContent = 'Unsolveable!';
        }
        const message = (
            <h1
                className={className}
                id="solveable"
                style={{ display: 'block', paddingBottom: '10px' }}
            >
                {textContent}
            </h1>
        );

        return (
            <div className="make-ten-container">
                <h1 className="title">Train Game Solver</h1>
                <p className="subtitle">
                    Solver to the train/bus/ferry/tram/any 4 digit number game. Must
                    make 10 by using all 4 numbers in order. Can use any number of
                    parentheses and the + - × ÷ operators.
                </p>
                <form autoComplete="off">
                    <input
                        autoComplete="off"
                        type="text"
                        id="input"
                        maxLength={4}
                        className="train"
                        placeholder="1234"
                        size={4}
                        pattern="\d*"
                        onKeyDown={MakeTen.validateNumber}
                        onKeyUp={(e: KeyboardEvent) => {
                            const { value } = e.target as HTMLInputElement;

                            if (value.length === 4) {
                                const puzzle = Array.from(value).map((i) => parseInt(i, 10));
                                if (MakeTen.isSolveable(puzzle)) {
                                    this.setState({ content: 'solveable' });
                                } else {
                                    this.setState({ content: 'unsolveable' });
                                }
                            } else {
                                this.setState({ content: 'empty' });
                            }
                        }}
                    />
                </form>
                {message}
                <p className="subtitle">
                    This solution uses dynamic programming where the solution to each
                    subproblem P(i,j) is the set of numbers that can be produced with
                    the subsequence of indexes i to j. We solve subproblems in order
                    of increasing length of subsequence (that is j - i). Then our
                    puzzle is solveable if 10 exists in the set of the solution to
                    P(1,4).
                </p>
                <p className="subtitle">
                    This solution can easily be extended to solve similar problems
                    with longer sequences and/or a larger range of values allowed for
                    numbers in the sequence since (instead of limiting them to single
                    digits). Additionally, the solution can be easily altered to solve
                    for different numbers, instead of 10. All of these modifications
                    will scale much better than a brute force attempt of placing
                    parentheses and operators in the possible combinations.
                </p>
                <p className="subtitle">
                    {'I\'m yet to find any wrong answers for my solver, but if you do find one, send me an '}
                    <a href="mailto:mattdavo15@gmail.com">email</a>
                    .
                </p>
            </div>
        );
    }
}

export default MakeTen;
