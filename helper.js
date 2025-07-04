//const { default: WasmModule } = window['Tim Test Tool Multiplatform']; // Import it
//onTimApiReady = function() {
//    composeApp.then(
//         function(value){ value.timApiReadyCallback() },
//         function(error){})
//}

class MyTerminalListener extends timapi.DefaultTerminalListener {

    constructor(requestCompleted, terminalStatusChanged, screenshot, disconnected) {
//        console.log("constructor MyTerminalListener");
//        console.log("constructor super()");
        super();
//        console.log("constructor requestCompleted = " + requestCompleted);
        this.requestCompletedCallback = requestCompleted;
//        console.log("constructor terminalStatusChanged = " + terminalStatusChanged);
        this.terminalStatusChangedCallback = terminalStatusChanged;

        this.screenshotCallback = screenshot;
//        console.log("returning");

        this.disconnectedCallback = disconnected;
    }

    requestCompleted(event, data) {
        super.requestCompleted(event, data);
/*        console.log("\n\nrequestCompleted called: event = " + event);
        console.log("requestCompleted called: data = " + data);*/
        this.requestCompletedCallback(event, data);
    }

    terminalStatusChanged(terminal) {
        super.terminalStatusChanged(terminal);
//        console.log("\n\nterminalStatusChanged called: terminal = " + terminal);
        this.terminalStatusChangedCallback(terminal);
    }

    screenshot(terminal, screenshotInformation) {
        super.screenshot(terminal, screenshotInformation);
        this.screenshotCallback(terminal, screenshotInformation);
    }

    disconnected(terminal, exception) {
        console.log("\n\nterminal disconnected called: terminal = " + terminal);
        console.log("\n\nterminal disconnected called: exception = " + exception);
        super.disconnected(terminal, exception);
        this.disconnectedCallback(terminal, exception);
    }
}
