interface ITransport {
  deliver (): void
}

class Ship implements ITransport {
  deliver (): void {
    console.log('Ship delivers goods')
  }
}

class Truck implements ITransport {
  deliver (): void {
    console.log('Truck delivers goods')
  }
}

abstract class TransportCreator {
  abstract createTransport (): ITransport
}

class ShipCreator extends TransportCreator {
  createTransport (): Ship {
    return new Ship()
  }
}

class TruckCreator extends TransportCreator {
  createTransport (): Truck {
    return new Truck()
  }
}

type TransportTypes = 'ship' | 'truck'

export default class Logistics {
  private transportCreator: TransportCreator = new ShipCreator()

  deliver (transportType?: TransportTypes): void {
    switch (transportType) {
      case 'ship': this.transportCreator = new ShipCreator(); break
      case 'truck': this.transportCreator = new TruckCreator(); break
      default:
    }

    const transport = this.transportCreator.createTransport()
    transport.deliver()
  }
}
