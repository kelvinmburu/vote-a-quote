export class Quotes {
    title: string;
    link: string
    votes: number

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    //Function to increase the number of votes

    voteUp() {
        this.votes += 1;
    }

    //Function to decrease the number of votes

    voteDown() {
        this.votes -= 1;
    }
}