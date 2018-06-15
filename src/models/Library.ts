export default class Library {
    constructor(public name: string,  public bundleSize: number, public treeShakeable: boolean, public timeZoneSupport: boolean, public github: string, public website: string, public logo?: string) {}
}