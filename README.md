# 05-Third-Party-APIs-Work-Day-Scheduler

![Alt text](/relative/path/to/Screen Shot 2022-05-20 at 2.54.39 PM.png?raw=true "Screenshot of the schedule maker")

## Project Description
This is workday schedule is perfect for writting down meetings a user has to attend, lunch hour, work hour, whatever the user would need a scheduler for within business hours. Events saved will be remained saved regardless of how many times the user refreshes the page and/or close out of the page. As long as the user still has the link to the scheduler, then they'll be able to use it freely. 

## How to use the work day scheduler
When the user opens it up they will see that the current day is displayed at the top. When they scroll down they will be presented with business hours (9AM-5pm). When the user clicks on the textarea, they'll be allowed to enter in an event. When the user decides to click the save button for whichever hour the event is written in then it will be saved to the local storage. If the user refreshes their page all of their saved events will still be displayed. The hours are also color coded to help users figure out their schedule a bit easier. Grey means it had already passed, red is the current hour, green means it has not passed yet. 

## Challenges 
There is a lot more to localStorage then to save values. I figured out you can use them to save keys as well to call them back when needed to display. Beforing figuring this out I was extremely stumped on how to even start this project. But once I realized I could save the hours inside the keys to render onto the page when the user refreshes it, it all clicked. 

Targeting certain elements within a parent element was confusing at first. But once they were broken down, it was much easier to understand and see why the code was not running like how I wanted it to before.
