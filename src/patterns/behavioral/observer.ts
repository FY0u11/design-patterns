enum States {
    SWITCHON = 'On',
    SWITCHOFF = 'Off'
}

interface Subject {
    subscribe (observer: Observer): void

    unsubscribe (observer: Observer): void

    notify (): void
}

interface Observer {
    update (subject: Subject): void
}

export class NetworkFilter implements Subject {
    private observers: Set<Observer> = new Set()
    private _state: States = States.SWITCHOFF

    switch () {
        if (this.state === States.SWITCHON) this.state = States.SWITCHOFF
        else this.state = States.SWITCHON

        this.notify()
    }

    get state (): States {
        return this._state;
    }

    set state (value: States) {
        this._state = value;
    }

    notify (): void {
        this.observers.forEach(subject => subject.update(this))
    }

    subscribe (observer: Observer): void {
        this.observers.add(observer)
    }

    unsubscribe (observer: Observer): void {
        this.observers.delete(observer)
    }
}

export class Lamp implements Observer {
    constructor (private name: string, subject: Subject) {
        subject.subscribe(this)
    }

    public update (subject: NetworkFilter): void {
        switch (subject.state) {
            case States.SWITCHOFF:
                console.log(`Lamp [${this.name}] is off`);
                break
            case States.SWITCHON:
                console.log(`Lamp [${this.name}] is on`)
        }
    }
}

export class Laptop implements Observer {
    constructor (subject: Subject) {
        subject.subscribe(this)
    }

    public update (subject: NetworkFilter): void {
        switch (subject.state) {
            case States.SWITCHOFF:
                console.log('Laptop is off');
                break
            case States.SWITCHON:
                console.log('Laptop is on')
        }
    }
}

export class TV implements Observer {
    constructor (subject: Subject) {
        subject.subscribe(this)
    }

    public update (subject: NetworkFilter): void {
        switch (subject.state) {
            case States.SWITCHOFF:
                console.log('TV is off');
                break
            case States.SWITCHON:
                console.log('TV is on')
        }
    }
}
