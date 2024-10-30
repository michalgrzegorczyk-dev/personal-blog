import {signal} from "@angular/core";
import {shuffle} from "../../utils";

export type MindsetType = {
  content: string;
  author: string;
  type: 'text' | 'img';
}

export const mindsetList = signal<MindsetType[]>(shuffle([
  {
    content: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
    type: 'text'
  },
  {
    content: "Don't expect to be motivated every day to get out there and\n" +
      "make things happen. You won’t be. Don't count on\n" +
      "motivation. Count on Discipline.",
    author: "Jocko Willink",
    type: 'text'
  },
  {
    content: "You are paid to solve problems, and it doesn’t have to be done through coding.",
    author: "",
    type: 'text'
  },
  {
    content: "./mindset/perspective.png",
    author: "",
    type: 'img'
  },
  {
    content: "./mindset/opportunities.jpg",
    author: "",
    type: 'img'
  },
  {
    content: "Sometimes you have to lose yourself to find yourself.",
    type: 'text',
    author: "",
  },
  {
    content: "./mindset/golimitless-readfromright.jpeg",
    type: 'img',
    author: "Addy Osmani",
  },
  {
    content: "./mindset/techdebt.jpeg",
    type: 'img',
    author: "monkeyuser.com",
  },
  {
    content: "The magic that you’re looking for is in the work you’re avoiding.",
    type: 'text',
    author: "",
  },
  {
    content: "Consider the price one pays for victory: hours of pain and\n" +
      "sacrifice and self-denial. When you consider all these factors, a\n" +
      "victory isn’t really a victory. Nothing can be a pure victory. I\n" +
      "think about that a lot. Any success can also be considered a\n" +
      "failure, in some sense, and every failure can also be considered a\n" +
      "success because it presents an opportunity to learn.",
    type: 'text',
    author: "Quoted from the book 'The Stoic Mind' by Addy Osmani",
  },
]));
