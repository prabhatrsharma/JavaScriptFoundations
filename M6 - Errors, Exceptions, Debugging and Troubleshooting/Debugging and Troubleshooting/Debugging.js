// To check if our browser supports this functionality, we can simply try to execute this code with the developer console opened.
console.log("Before debugger");
debugger;
console.log("After debugger");
/*
If the debugger is present, the console will show only the "Before debugger" log, and depending on the installed browser, we should see information about code execution either stopped, or paused in the debugger, or in debug mode. The second log message is not displayed because the debugger statement works as a breakpoint in the code execution. So whenever JavaScript encounters the debugger statement, it checks if the debugger is present, and if so, code execution is halted at that exact point. This of course is not helpful by itself, but this is only the beginning of the features of the debugger.

In general, all modern browsers support the following options to control the execution of the script in debug mode:
‍𝗥𝗲𝘀𝘂𝗺𝗲 / 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗲. This will resume the execution of the script in a normal way, and is used when we’ve checked what we wanted to check, and now we want to continue with the execution of the script.
𝗦𝘁𝗲𝗽 𝗜𝗻𝘁𝗼. This executes the next instruction in the code only, and pauses it again, and we use this when we want to analyze the code in detail, or check which exact path the execution takes when complex branching is happening due to cascading if...else statements, or other complicated logic. If the next instruction is a function call, using Step Into will jump inside the code of this function.
𝗦𝘁𝗲𝗽 𝗢𝘃𝗲𝗿. This works like Step Into, except that if this is used when the next instruction is a function call, the code will not jump into the function code, but the whole function will be executed, and the program will be paused again after jumping out of this function. This is often used when the next instruction is a call to a function where we don’t know if it will have any impact, or we’re simply not interested in looking.
𝗦𝘁𝗲𝗽 𝗢𝘂𝘁. This allows us to immediately jump out of a function in which the code is paused.
*/