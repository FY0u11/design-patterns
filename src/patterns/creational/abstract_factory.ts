interface IWindow {
    render (): void
}

interface IAlert {
    call (): void
}

interface ICreator {
    createWindow (): IWindow

    createAlert (): IAlert
}

class WindowsWindow implements IWindow {
    render (): void {
        console.log('This is windows window')
    }
}

class MacWindow implements IWindow {
    render (): void {
        console.log('This is mac window')
    }
}

class LinuxWindow implements IWindow {
    render (): void {
        console.log('This is linux window')
    }
}

class WindowsAlert implements IAlert {
    call (): void {
        console.log('This is windows Alert')
    }
}

class MacAlert implements IAlert {
    call (): void {
        console.log('This is mac Alert')
    }
}

class LinuxAlert implements IAlert {
    call (): void {
        console.log('This is linux Alert')
    }
}

class WindowsCreator implements ICreator {
    createWindow (): WindowsWindow {
        return new WindowsWindow()
    }

    createAlert (): WindowsAlert {
        return new WindowsAlert()
    }
}

class MacCreator implements ICreator {
    createWindow (): MacWindow {
        return new MacWindow()
    }

    createAlert (): MacAlert {
        return new MacAlert()
    }
}

class LinuxCreator implements ICreator {
    createWindow (): LinuxWindow {
        return new LinuxWindow()
    }

    createAlert (): LinuxAlert {
        return new LinuxAlert()
    }
}

type Platform = 'windows' | 'mac' | 'linux'

export default class App {
    private creator!: ICreator

    constructor (private readonly platform: Platform) {}

    init (): void {
        switch (this.platform) {
            case 'windows':
                this.creator = new WindowsCreator();
                break
            case 'mac':
                this.creator = new MacCreator();
                break
            case 'linux':
                this.creator = new LinuxCreator();
                break
            default:
                throw new Error('Such platform is not supported')
        }
    }

    start (): void {
        const window = this.creator.createWindow()
        const alert = this.creator.createAlert()
        window.render()
        alert.call()
    }
}
