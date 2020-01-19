import React from 'react';

import './MakeTen.css';

class MakeTen extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            content: 'empty'
        };
    }
    
    validateNumber(evt) {
        // https://stackoverflow.com/a/12142807
        var e = evt || window.event;
        var key = e.keyCode || e.which;
        if ((!e.shiftKey && !e.altKey && !e.ctrlKey) &&
            // numbers   
            ((key >= 48 && key <= 57) ||
            // Numeric keypad
            (key >= 96 && key <= 105) ||
            // Backspace and Tab and Enter
            key === 8 || key === 9 || key === 13 ||
            // Home and End
            key === 35 || key === 36 ||
            // left and right arrows
            key === 37 || key === 39 ||
            // Del and Ins
            key === 46 || key === 45)) {
            // input is VALID
        }
        else {
            // input is INVALID
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
        }
    }

    isSolveable(puzzle, target = 10) {
        let n = Array.from(puzzle).length;

        let sub_problems = Array(n);
        for (let i = 0; i < n; i++) {
            sub_problems[i] = Array(n);
            // sub_problems[i] = sub_problems[i].map(_ => {return ["a"]});
            for (let j = 0; j < n; j++) {
                sub_problems[i][j] = Array(0);
            }
        }

        for (let width = 1; width < n + 1; width++) {
            for (let i = 0; i < n - width + 1; i++) {
                let j = i + width - 1;

                if (width === 1) {
                    sub_problems[i][j].push(puzzle[i]);
                    sub_problems[i][j].push(-puzzle[i]);
                }
                else {
                    for (let k = i; k < j; k++) {
                        let l1 = sub_problems[i][k];
                        let l2 = sub_problems[k + 1][j];

                        let l1l2 = [];
                        l1.forEach(x => { l2.forEach(y => { l1l2.push([x, y]) }) });

                        for (let x of l1l2) {
                            let a = x[0]; let b = x[1];
                            sub_problems[i][j].push(a + b);
                            sub_problems[i][j].push(a - b);
                            sub_problems[i][j].push(a * b);
                            if (b !== 0) {
                                sub_problems[i][j].push(a / b);
                            }
                        }

                        sub_problems[i][j] = [...new Set(sub_problems[i][j])];
                    }
                }
            }
        }
        
        if (Array.from(sub_problems[0][n - 1]).includes(10)) {
            return true;
        }
        return false;
    }
    
    render() {
        let textContent = 'Enter 4 digits'
        let className = "title"
        if (this.state.content === 'solveable') {
            className += " train-solution"
            textContent = "Solveable!"
        }
        else if (this.state.content === 'unsolveable') {
            className += " train-no-solution"
            textContent = "Unsolveable!"
        }
        let message = (
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
                <p className="subtitle">Solver to the train/bus/ferry/tram/any 4 digit number game. Must make 10 by using all 4 numbers in order. Can use any number of parentheses and the + - × ÷ operators.</p>
                <form autoComplete="off">
                    <input
                        ref="input"
                        autoComplete="off"
                        type="text"
                        id="input"
                        maxLength="4"
                        className="train train-input"
                        placeholder="1234"
                        size="4"
                        onKeyDown={this.validateNumber}
                        onKeyUp={(e) => {
                            let input = this.refs.input;
                            if (input.value.length === 4) {
                                let puzzle = Array.from(input.value).map(i => { return parseInt(i) });
                                if (this.isSolveable(puzzle)) {
                                    this.setState({ content: "solveable" });
                                }
                                else {
                                    this.setState({ content: "unsolveable" });
                                }
                            }
                            else {
                                this.setState({ content: "empty" });
                            }
                        }}
                    />
                </form>
                {message}
                <p className="subtitle">This solution uses dynamic programming where the solution to each subproblem P(i,j) is the set of numbers that can be produced with the subsequence of indexes i to j. We solve subproblems in order of increasing length of subsequence (that is j - i). Then our puzzle is solveable if 10 exists in the set of the solution to P(1,4).</p>
                <p className="subtitle">This solution can easily be extended to solve similar problems with longer sequences and/or a larger range of values allowed for numbers in the sequence since (instead of limiting them to single digits). Additionally, the solution can be easily altered to solve for different numbers, instead of 10. All of these modifications will scale much better than a brute force attempt of placing parentheses and operators in the possible combinations.</p>
                <p className="subtitle">I'm yet to find any wrong answers for my solver, but if you do find one, send me an <a href="mailto:mattdavo15@gmail.com">email</a>.</p>
            </div>
        );
    }
}

export default MakeTen;
