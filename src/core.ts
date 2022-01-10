import {osType} from "https://deno.land/std@0.120.0/_util/os.ts"

/**
 * xdotool − command−line X11 automation tool
 * 
 * xdotool lets you programmatically (or manually) simulate keyboard input and mouse activity, move and resize windows, etc. It does this using X11’s XTEST extension and other Xlib functions.
 *
 * There is some support for Extended Window Manager Hints (aka EWMH or NetWM). See the " EXTENDED WINDOW MANAGER HINTS" section for more information.
 * @param args 
 * @returns 
 */
async function xdotoolRun(args: string[] = []) {
    const xdotool = Deno.run({
        cmd: [
            (osType == "windows") ? "windotool" : "xdotool"
        ].concat(args.filter(element => element !== "")), // Remove the empty arguments, necessary for windotool
        stdout: "piped", stderr: "piped", stdin: "piped"
    })

    return (new TextDecoder().decode(await xdotool.output())) || (new TextDecoder().decode(await xdotool.stderrOutput()))
}

export { xdotoolRun }