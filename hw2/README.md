# HW2 Part 3

Hey there, welcome to my project for homework 2 part 3. In this codebase, I have planted 6 violations coding principles. Let's see if you can find them!

The violated principles are the following,

1. Use Good Names. A property in the `Circle` class is named badly, making people not being able to understand the meaning at first glance. You should rename it to a meaningful name.
2. Don't Repeat Yourself. A quantity in `Circle` class is repeatedly used while not being saved as a constant. You should find it and replace it with a constant.
3. Don't Hardcode Things That Are Likely To Change. Similar to the above principle, a quantity should be changed to a constant variable.
4. Make Your Interfaces Meaningful. There's a meaningless interface in the code where you should delete it.
5. Keep Things as Private as You Can. A property in `AbstractShape` class is disclosed without fair reasons. Make it private.
6. A function in `Circle` uses condition rather than dynamic dispatch. Find it and make it rely on dynamic dispatch.