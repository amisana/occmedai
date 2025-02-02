# Memo

## Background

This is a talk I gave to ACOEM about safety and AI...

```
Hello everyone, thank you for joining for today's webinar, Navigating the AI Wave.
I'm Dr. Cameron Chiani.
I'm a second year resident at Mount Sinai's Occupational Medicine Program.
I'm thrilled to be here to discuss how AI can serve as a powerful tool for learning
and in complementing our knowledge and skills as OEM physicians.
As workplaces and the clinic become more technologically advanced, the integration of AI presents both
opportunities and challenges.
AI certainly cannot and will not replace us.
Like any new technology, be it the calculator, the personal computer, or the internet, it
comes down to how and when to utilize AI.
I feel like these tools also make it clear what AI models cannot replicate.
The experienced physician has insights and talents that cannot be encoded into ones and
zeros.
With that said, I do believe that the thoughtful and careful use of AI can increase our efficacy
and value independent of any gains in efficiency.
By leveraging AI, we can unlock new levels of influence, penetration, and impact never
before possible.
Let's begin.
On my screen, I have the chatGBT interface open.
Specifically, I've opened the page to this chatbot I put together called Safety Sentinel.
I'm going to send it a series of prompts to show you how it works.
I'm going to share this image with chatGBT.
It's a picture of a factory.
I've asked it to analyze this workplace image for safety hazards and focus on OSHA and NIOSH
rules and regulations.
Let's go back.
This is the image.
I'm pulling it up and panning across so you can see what chatGBT is going to be seeing.
So it's making some observations.
First about the guarding of machinery.
Relates to OSHA standard.
It's talking about lockout and tagout procedures.
It's even bringing up noise exposure.
It's not in the image, but it's making that assumption that that machine is going to be
loud and that there might be an OSHA standard related to it.
It even relates to the standard itself.
Now it doesn't give a citation or a link, so we would want to ask it for that specifically.
I could have originally prompted it, "Analyze this workplace image for safety standards.
Focus on OSHA and NIOSH regulations.
It is of utmost importance that you provide your citation and a link to where you got
the information."
Now that would also be different than if I had said the same thing and at the end of
it said, "Make sure not to make anything up.
Don't use any fictional or made up citations.
That is absolutely unacceptable."
That's going to affect the way that it does the task.
That response is probably going to be shorter.
It might not be as broad in terms of what it presents.
Maybe it doesn't bring up the noise standard.
So that may not be to my benefit, but at least you know it's more likely to be accurate.
I'm still going to have to do the legwork regardless.
But a lot of times, I think the value add is the variety of answers or responses that
it gives you because you're going to have to do the legwork either way because at the
end of the day, you're going to be the one refining it and enhancing it.
It's not that different from real life.
You might ask me as a resident to provide a differential.
You're going to assume, as you rightly should, that half of what I say is completely unreliable.
However, there may be something in there that maybe you didn't think of that can then be
explored further.
Also, over time, as my residency progresses and I gain more knowledge and experiences,
maybe you're second guessing me only 50% of the time instead of, say, 90% of the time.
We're seeing the same trend over time with these AI models.
App GPT is becoming more reliable over time and it's hallucinating less.
You've probably heard that term.
That's when the model just makes something totally random up, makes a study that doesn't
actually exist up.
So we need to stay vigilant and continue to double check the things that it's saying,
prompt it in a way that it gives its sources and links so we can go to the links.
I think it's natural to slide a little bit.
I think that's human nature, which it puts forward a somewhat interesting philosophical
question, which is, I'll use the resident example again.
As you become more comfortable with a resident, maybe you're less likely to double check every
single thing that they put out there.
If we cross-checked every single piece of information that we were ever presented with,
we would never go anywhere.
So where do we draw the line?
I think this is something to reflect on and maybe we'll have time to talk about it during
the Q&A session.
Now I'm going to ask it, can you cite the specific OSHA regulations and provide a functional
URL?
Generates the link, a one sentence summary, and now let's go through these links.
Occupational noise, walking working surfaces, PPE, machine guarding.
What do we want to do next?
I'm going to ask it to create a table based on its last response, make it a little easier
to read.
Let's make this table column one hazard, then it has the OSHA regulation, the name, and
the URL.
I can download this.
I can copy it.
It's even given some suggestions for what to do next.
Can you explain lockout tagout?
What PPE is recommended for factories?
I'm going to ask it to add relevant ANSI and ISO guidelines if they exist.
Proactive, prompting by me so it doesn't just make something up, but I also say it, don't
make anything up.
But don't try, don't not try hard enough to find the relevant documents/citations.
That's where this bounce comes in, where you say don't make anything up, then it doesn't
look hard enough.
So it's provided me with an enhanced table.
It's doing it inline though.
Let's close out this other table so we can see this one a little bit better.
So here's the new table.
It has the relevant ANSI and ISO guidelines in a new column and links in another column.
Interestingly, I didn't explicitly ask for URLs, but it provided them for me.
So it's retaining that information from earlier in the conversation.
The term to know here is context window or context length.
This refers to the amount of input text the model can consider at any given time to generate
the output.
GPT models have a fixed token limit or rather context window that defines how much of the
preceding text can be used to inform the prediction of the next text.
So it's learning in the middle of this conversation as it proceeds.
Provides a nice little summary of each guideline.
Then look what it says here.
I've cross-checked these standards to ensure their relevance to the hazards identified.
You can refer to the URLs provided for purchasing or accessing the full standards where available.
Next I'm going to say, can you do a deep dive into specific safety concerns, bold key words,
and present the information in various formats.
It's thinking and then it starts this deep dive.
I do think it's interesting that it notes with key points bolded, it's going to make
it easier to digest.
It made that inference.
Just noting here that I was able to read that there was a spinning dryer.
And here are the relevant guidelines, the ANSI guideline and the ISO guidelines, which
have been cross-checked.
Moving on.
Lockout/tagout.
So it's interesting that it noted there was a lack of a visible lockout/tagout station.
Now there could certainly be one.
This is only one image.
But I think it's better for it to note that than to not note that.
And the language, at least to me, doesn't imply that there's not one.
It's just saying that there's not a visible one, which is to me a higher order inference
to make.
And if anything, a more conservative one.
Now could this be because of my prompting?
Certainly.
Even with the same prompts, the same questions, the same model, the same iteration of the
model, you will get different responses every time.
So next I asked it to generate a safety audit checklist.
And this is what it made.
It gives the checklist items.
For example, is there signage indicating the presence of dangerous machinery?
And then it tells the user what to do.
Ensure clear, visible signage warrants employees of rotating machinery.
It's making it incredibly simple for us.
Are emergency stop devices easily accessible and functioning?
There's more of this.
Next steps.
I've actually shared the image with ChachiBt again.
If you're curious why, the reason I did this is because at this point, it may have forgotten
the image.
It's not going to say, "Oh, I forgot the image."
There's no surefire way to know exactly how much it's forgotten or when it started forgetting.
So the conservative thing to do is to just remind it what's going on, what stuff you
guys have been talking about.
Really the safest, most conservative, and really the most effective thing to do is just
to start a new chat.
The last thing I'm doing here is I'm having ChachiBt make a mind map of the information
of the OSHA guidelines.
Just another way to visualize the information.
This is really just to drive home the multimodal aspect of ChachiBt, how it can output information
or relay information to you as audio, as a graph.
It can take visual information in, it can take audio information in.
And that's one of the really cool things about not just ChachiBt, most models, the big ones,
have this functionality.
It can vary in terms of maybe how it functions or how it'll respond, but this is the new
normal as far as what models are capable of doing.
This multimodal ability to take in various types of media and output it in various types
of ways.
I want to introduce a new platform from Google that was recently released and has been making
waves.
It's challenging to keep up really with the constant developments, the new platforms that
are released, but I can promise you that 99% of the headlines saying there's been some
sort of paradigm shift or there's some company or app or whatever talking some new AI tool,
these are all relatively insignificant.
They're nothing to write home about.
We're usually talking about a software update to GPT or Gemini, giving it a larger context
window or something to that effect.
Notebook LM from Google is the first time in a while where I've been really impressed
by something where it's not just a minor software update.
That seems to be the general feeling around it from what I can tell.
Getting started is pretty simple.
You just log in with your Gmail account and then you get to a page that looks like this.
All you need to do is click create new.
I'm going to upload these two guidance statements from the Journal of Occupational and Environmental
Medicine.
They came out pretty recently in the last year.
This is from ACOM's Health Informatics Committee on Occupational Electronic Health Records
looking at interoperability, design and implementation of information systems and how that affects
occupational environmental medicine practice.
So now, as I was talking, Notebook LM now generated this summary from the two articles
that provided sources focused on the importance of EHRs to improve patient care, public health
and worker safety.
You can create an FAQ, a study guide, table of contents, timeline, a briefing document.
And this is really cool.
I'm going to talk about in a little bit audio overview.
Click generate.
So that takes maybe five minutes.
These are the questions that it came up with based on its read of the papers.
What are the benefits of incorporating occupational information into electronic health records?
What are the challenges associated with incorporating occupational information to EHRs potentially
concerning data, privacy, security and interoperability?
How can EHR systems be designed and implemented to address the specific information needs
of OEM practitioners?
So let's go with the second question.
Okay so we're back at home base.
This is what happens when you refresh the page if you don't save any of the chat notes.
You actually have to save them by pressing the save button or the history gets cleared.
I'm actually going to click this one.
Let it start answering but let's open up the little summary page and let's generate these.
The study guide, table of contents, timeline, briefing document.
So they pop up.
So it's provided this kind of nice organized summary.
I like that it's similar to before, actually bolds the important terms so you can kind
of walk into that, makes it a little bit easier to read.
So if you hover over one of these citations it actually shows you exactly what it's citing.
You'll see that it doesn't cite it verbatim.
It might paraphrase a little bit, might take out or synthesize certain information.
So it's not one-to-one.
Ostensibly, you could tune the model so it would be one-to-one.
And notebook LM is not tapped into the common crawl.
It is not trained, to my knowledge, or at least in this moment, it is only using your
information that you've provided it with.
Just here it's just these two articles, but you could put in 50 articles and it would
only be referencing that information.
So the way you use it or the situations in which you may use it may be very different.
You may use both for different reasons in the same situation.
Brings us to the section.
We can see the context.
Also when you hover over, here we also see the document that it's citing.
So I really like that about notebook LM.
And it forms, I think, some pretty good questions, but you can ask it anything you want, of course.
Let's pull this up again.
Okay, it's made a 23-minute podcast.
And we'll get to that very briefly, which you guys are probably sick of hearing my voice.
So maybe you want to hear some AI-generated voices.
Let's see.
Close this.
So these are the documents that we generated.
Let's say we want to save this.
We save this response.
And you can give it a good response or bad response, and that will be training it.
Now, I'm actually not sure if it trains their model or it's only training this contained
model.
That's a good question.
But I'm going to give it a thumbs up.
Oh, feedback submitted successfully.
So let's open the quiz.
And the nice thing is you can just copy it, and here's a little shortcut that I use all
the time.
If you go to docs.new, it'll open a new Google document, sheets.new, a new Google sheet.
And just paste it right in here.
That's the question.
There's the answer.
What else?
Timeline of events.
So here they actually don't have the citations.
That was one thing I noticed before.
I'm not sure why.
Or if you can modify that.
Cast of characters.
I do like that.
That's very useful.
All right, everyone.
Let's jump right in.
We're tackling occupational electronic health records today, OEHRs.
You sent this ACOM guidance statement our way, so I can tell you're already thinking
about this stuff.
Worker health, data, all that in the digital age.
It's pretty cutting edge.
This is pretty new territory for me, so I'm really looking forward to learning more about
it today with you.
It's always changing, always.
A lot going on, a lot to keep up with in this area.
Occupational medicine, it really does present some unique challenges compared to just like
regular health care.
Okay.
Well, for those of us who don't live and breathe this stuff, walk me through it.
What makes it so unique when you're thinking about medical records in this context?
So imagine this.
You're an occupational medicine doc.
You've got workers coming to you for all sorts of things.
I mean, you've got your standard pre-employment physicals.
Someone gets injured on the job.
They're coming to you.
Of course, yeah.
They have a chronic condition that could affect how they do their job safely.
You have to manage that.
Now on top of all that, you're dealing with incredibly sensitive information.
We're talking about their health, their job security could be on the line.
Right, yeah.
It's a lot to juggle.
And not to mention the whole data privacy angle.
That's a whole other can of worms we've got to open.
Absolutely.
High pay is just the beginning.
Right.
Then you've got OSHA regulations about workplace health records, ADE considerations, and it
just gets more and more complicated.
It's a lot to keep track of.
And the thing is, the electronic health records, the traditional ones that most clinics use,
they just weren't built for this.
They weren't designed with occupational health in mind.
Okay, so enter stage left, the OEHR.
Exactly.
The hero of our story.
So tell me, what makes these systems so special?
What makes them the right tool for the job?
Well, OEHRs, think of them as specialists.
They were designed from the ground up to deal with the complexities of employee health data.
That's their specialty.
Got it, yeah.
And remember that ACM guidance statement you mentioned?
Yes.
It actually outlines 10 key recommendations for a successful, truly effective OEHR.
10.
10 recommendations.
All right, we are going to have to unpack this.
I'm guessing this covers everything from how to keep that data secure to how these systems
actually function day to day in a workplace, right?
You got it.
The really interesting part for me is this emphasis on striking a balance.
You need to protect worker privacy, but you also need to make sure the right information
is accessible to the right people.
Right, so it's got to work.
Exactly.
It has to work, but it also has to be secure.
Yeah, that makes a lot of sense.
So I mean, I'm all about real world examples.
You know me.
Sure, yeah.
Does the guidance statement give any specific scenarios where this all kind of comes together?
There's one actually about a physician assistant.
And this PA is dealing with two pregnant employees.
And it's really interesting.
Pregnant employees.
Pregnant employees, yeah.
Okay, that sounds tricky.
This is where things get complicated.
This kind of case study shows how complex these situations are.
You're balancing privacy, legal issues, potential discrimination claims.
It's a minefield.
Okay, yeah, I'm definitely seeing how that could get messy really fast.
So tell me more about this PA and the pregnant employees.
So picture this.
Picture this PA.
Okay.
You've got these two employees, both pregnant, but their pregnancies are very different.
One's high risk.
The other's pretty straightforward.
How do you manage their care, make sure everyone's getting what they need, while also making
sure you're not running afoul of any privacy regulations?
Right, yeah, and not showing any kind of favoritism, you know, like making sure everything's above
board.
Exactly.
And that's where OEHRs, they can really help.
They have features specifically designed for this.
Got it.
To help you navigate those really tricky situations.
So yeah, it's like walking a tightrope, isn't it?
It is.
And we're just getting started because remember, HIPAA is just the tip of the iceberg.
There are all sorts of other laws that come into play here, stuff a lot of people haven't
even heard of.
Is this like one of those legal thriller movies where they find some obscure clause?
Well, okay, maybe not that dramatic.
Maybe not that dramatic, but it's important.
But what else is out there besides hyper?
What else do we need to be thinking about?
Well, you've got GINA.
That's the Genetic Information Non-Discrimination Act.
GINA, okay.
That throws a whole other wrench into things.
Yeah.
Especially when you consider someone's family history and that might be in their records.
Right, right.
And on top of that, you've got state laws that are constantly changing.
Of course, yeah.
More and more focus on data privacy all the time.
So these OEHRs, they need to be adaptable.
They need to keep up.
It's like a moving target almost, right?
Exactly.
Always evolving.
So I'm hooked.
You've definitely set the stage here.
The stakes are high, but these OEHRs, it sounds like they're like the knights in shining armor
in this situation.
Right.
But let's get practical here.
How do they really work in the real world?
Like how are OEHRs actually making a difference aside from just avoiding lawsuits?
Because I have a feeling that pregnant employee scenario, that's just the beginning, isn't
it?
Oh, absolutely.
It's a lot more to it than that.
That pregnant employee case, that is a great example of the kind of tough spot occupational
medicine clinicians are in all the time.
But I get the feeling that OEHRs, they're more than just the safety net, legally speaking,
right?
What else do those ACIM recommendations highlight?
Let's talk about the exciting stuff.
What's really cool about these systems?
There's some really cool stuff.
One of the most exciting developments is interoperability.
Interoperability.
Interoperability.
Interoperability.
Okay.
So now we're getting really techie.
A little bit.
What does that even mean?
So imagine a system where you've got a worker's occupational health records and those records
can seamlessly, securely connect and share information with their regular primary care
physicians records.
Okay.
So we're talking about like some kind of high tech medical record exchange program.
Exactly.
Zipping between doctors' offices.
That's the idea.
It's about secure connections, sharing information, and there are standards being developed right
now like FHIR.
FHR.
FHIR.
Like FHR.
Okay.
It stands for Fast Healthcare Interoperability Resources.
Catchy.
Yeah.
It's a mouthful.
But basically...
It sounds intense though for medical records.
It's not setting anything on fire.
Don't worry.
Okay.
Good.
But it's like a universal translator for all these different health systems.
Got it.
Helps them talk to each other.
There's more technological barriers.
And this is huge because, you know, think about something like preventing a bad drug
interaction.
Oh, yeah.
That could be really dangerous.
I'm sure there are tons of cases where, you know, a medication that a primary care doctor
prescribes could react really badly with something that an occupational health doctor might recommend
for a workplace injury.
Absolutely.
Or what if there's a preexisting condition that completely changes how you would treat
a work injury?
Right.
So interoperability makes sure everyone has all the pieces of the puzzle.
Right.
So everyone's on the same page.
Safer, more effective care.
That makes a lot of sense.
Okay.
Interoperability.
Check.
What else have we got?
What else is on the OEHR greatest hits list?
Another big one is structured documentation.
Structured documentation?
Yeah, I know.
Doesn't sound quite as exciting.
It doesn't have the same ring to it, but it's important.
All right.
All right.
You've earned my trust at this point.
Convince me.
Yeah.
Why is structured documentation going to change the world?
Okay, so it's all about how information actually gets put into the system.
Think like drop-down menus.
Okay.
Checkboxes.
Specific fields for specific pieces of data.
So instead of just like a doctor jotting down whatever they want in a big text box, it's
more like filling out a really detailed form.
Exactly.
Okay.
It might seem a little tedious, but here's the kicker.
It actually makes privacy stronger.
Wait, hold on.
How does that work?
How does making doctors click more buttons keep my health information private?
Because with this structured data, you can control exactly what gets shared and what
stays confidential.
Remember that needle stick injury case study in the guidance?
The one where they accidentally revealed the nurse's cancer history?
That's the one.
Yeah.
Not exactly a shining moment for patient confidentiality.
Exactly.
And structured data can help prevent that kind of thing from happening.
Okay.
Because health information is so neatly categorized, you can share only what's absolutely necessary.
Got it.
Let's say for a workers' comp claim, everything else stays locked down.
So it's like different levels of security clearance for different parts of my medical
record.
Exactly.
And bonus, it not only protects privacy, but it also saves clinicians a ton of time.
No more digging through pages of handwritten notes.
Everything's organized, searchable.
All right.
I'm starting to see the light here.
Structured documentation, maybe not as boring as it sounds.
No, it's important.
And it's a win-win, right?
Privacy, efficiency, everyone wins.
Okay.
What else can these OEHR systems do?
Well, remember that case with the warehouse worker?
The one with the back injury?
The back injury, yeah, kept coming back.
Yeah, the one where they went back to work too soon, then ended up in worse shape?
That one was rough.
That's exactly what I'm talking about.
It's a perfect example of how OEHRs can really help give clinicians the information they
need to make the best call.
Okay.
Imagine if that clinician had had easy access to data about previous back injuries in that
warehouse.
Maybe they could have made a different decision about whether that worker was really ready
to go back.
So it's not just about keeping track of what already happened.
It's about using that data to hopefully prevent future injuries.
Exactly.
It's like having a crystal ball.
Kind of, yeah.
It's about giving clinicians the information they need when they need it so they can make
the best decisions for both the worker and the employer.
It's about moving from reacting to things to getting ahead of them.
This is blowing my mind a little bit.
We've got OEHRs protecting privacy.
They're like champions of worker safety.
And now they're like telling the future and preventing workplace injuries.
Is there anything these systems can't do?
You know, listening to you, it's easy to forget.
We're just talking about computer systems here.
But it makes me think, if we're talking about empowering workers, shouldn't they be able
to see all this data too?
Absolutely.
Is that even possible with these OEHRs?
It is.
In fact, it's becoming more and more common, that HOM guidance you mentioned.
One of the recommendations is for something called employee health portals.
Okay, employee health portals.
Now you're speaking my language.
What are we talking about here?
So imagine this.
You're a worker, right?
You've got this secure online portal.
You can access it whenever you need it.
You want to check your latest lab results.
Boom.
They're right there.
No more waiting for a phone call.
No more phone tag.
Love it.
You need to schedule an appointment.
You can do it right there.
You've got a question about a medication.
Send a message to your doctor.
It's about giving workers control over their own health information.
That's amazing.
I can see how important that would be, especially for someone dealing with a sensitive health
issue.
No more waiting for paperwork.
No more phone tag.
It's all right there.
And it goes even further than that.
Some OEHRs have built-in educational resources, personalized health tips.
Some even have tools to help you track your recovery if you're injured and you're trying
to get back to work.
So it's like having a personal health coach in your pocket.
Exactly.
And it's specifically for work-related stuff.
And this proactive approach, it's huge, not just for the workers themselves, but for the
workplace as a whole.
Right, because healthier workers, healthier workplace.
Exactly.
Teamwork makes the dream work.
That's right.
And the potential for these OEHRs to really change things.
We're just scratching the surface.
Remember those real-time reporting and surveillance features we talked about?
Oh yeah, the ones that can help spot hazards, right?
Exactly.
But imagine using that data not just to react to problems, but to actually predict them,
prevent them before they even happen.
Okay, yeah.
So you're not just putting out fires, you're preventing them from starting in the first
place.
Exactly.
It's a whole new way of thinking about workplace safety.
And the best part, the more data these systems collect, the smarter they get at identifying
those early warning signs.
Wow.
We've covered so much ground today.
Data privacy, cutting-edge technology, the future of worker health.
It's a lot.
It's a lot to process, but this has been incredibly eye-opening.
It has.
And that HCO guidance, it paints a really optimistic picture of what's possible.
But it also leaves us with some important questions to consider.
And as always, we love to leave our listeners with a little something to think about, something
to chew on.
So what's the big takeaway for today?
What's the question we should all be asking ourselves?
Well, we've talked a lot about what clinicians can do with OEHRs, what employers can do.
But what about the workers themselves?
Oh yeah.
It's their data, after all.
What role can they play in making sure their information is being used ethically responsibly?
That's the conversation I hope we can continue to have.
That is a great question and an important one, especially as technology continues to
change how we work.
Absolutely.
To our listener who sent this our way, thank you for sending us on this journey.
Yeah, thank you.
This has been a fascinating deep dive.
It has.
And to everyone else, thanks for listening.
Until next time, stay curious.
```

---


Here is some info about the AI Fund. It is a venture studio that works with entrepreneurs to build companies rapidly and increase the odds of success. I am a non-traditional applicant in some ways. But I have a lot that aligns and to offer. While I'm not sure I want to be the in-house founder for the job that you'll hear about below. I think it will help frame certain things such as the above. Definitely be more interested in being on the principal, you know, venture side. But, yeah, just read this first and then we'll talk about it.

---

career - Founder-in-Residence/CEO (AI for Workplace Safety)
https://jobs.lever.co/AIFund/a8d4cd22-2d70-482d-ab80-6af3832a0789 | https://jobs.lever.co
---


**Who We Are:**

AI is the new electricity: Just as electricity transformed numerous industries starting 100 years ago, AI is now poised to do the same. AI Fund is an early stage venture firm founded by Dr. Andrew Ng in 2017. Our portfolio companies utilize AI technology and applications to improve processes and efficiency. The AI Fund team combines their experiences as AI pioneers, entrepreneurs, venture capitalists, investors, and operators. We are backed by a $176 million-dollar fund from top-tier VC firms.

Together, let’s build great companies that will move humanity forward.

**Why Partner With AI Fund**:

We’ve been there.  We’ve founded and scaled successful companies ourselves, and we know that creating meaningful startups is really hard.  Many entrepreneurs toil with ideas for years.  Many spend time building something without the foresight of limiting factors that could have been easily dismissed upfront.  Accomplished execs often teeter between a desire to start a company and creating something great versus taking a job that is less fulfilling.  If only someone could help with taking the risk out of turning an idea into reality and accelerate the company building process, more people would be inspired to start a company.

Coming up with great ideas, sussing them out, assembling great teams, and helping raise capital is what we do.  We shorten a process that can take years down to months.  We make sure you are going after the right market, are fully validated, and are surrounded by great teammates.  Lastly, we make sure you see the world through the lens of a data scientist and machine learning expert, which is the perspective any meaningful company in the future must have.  

But we also know that the process is not about us.  It’s about great Founders and empowering them to do great things.

**Co-build with an industry partner:** 

This new company will be launched in partnership with The AES Corporation (NYSE: AES), a Fortune 500 global energy company accelerating the future of energy. Together with their many stakeholders, they are improving lives by delivering the greener, smarter energy solutions the world needs. Their diverse workforce is committed to continuous innovation and operational excellence, while partnering with their customers on their strategic energy transitions and continuing to meet their energy needs today.

**About PC**:

AI Fund and AES have partnered to launch an AI-driven solution that is advancing how safety and risk management challenges are addressed for capital-intensive industries. Our vision is to provide organizations with a solution that will allow Safety Teams to 2x their output all while being designed to significantly reduce work-place safety incidents and foster a culture of operational excellence.

By leveraging a multi-agent framework, our solution enables safety teams to work more efficiently, better leverage the learnings from past incidents and make data-driven decisions to drive proven improvements in workplace safety and resilience.

Join us in shaping the future of safety and risk management. Together, we are building smarter, safer workplaces for tomorrow.

### Characteristics That We Value:

-   **Accountability:** an obligation or willingness to accept responsibility or to account for one's actions while doing so with the highest regard for integrity.  
-   **Leadership:** able to influence others to follow you and lead the team to a brighter future. 
-   **Grit:** able to stick with projects and work hard through good and bad times. High pain tolerance and can perform well under stress or pressure.
-   **Scrappy:** takes initiative and proactively gets things done with low resources, but doing creative things, begging, borrowing, and whatever is needed in an ambiguous environment or situation.
-   **Ownership orientation:** demonstrated orientation of extreme ownership over all aspects of the company and extremely results-driven in nature.

At AI Fund, we are committed to providing an environment of mutual respect where equal employment opportunities are available to all applicants without regard to race, color, religion, sex, pregnancy (including childbirth, lactation and related medical conditions), national origin, age, physical and mental disability, marital status, sexual orientation, gender identity, gender expression, genetic information (including characteristics and testing), military and veteran status, and any other characteristic protected by applicable law. AI Fund believes that diversity and inclusion among our employees is critical to our success as a company, and we seek to recruit, develop and retain the most talented people from a diverse candidate pool. Selection for employment is decided on the basis of qualifications, merit, and business need.

<u>#LI-DNI</u>
---
***End of Article**

AES Partners with AI Fund to Accelerate AI-Driven Energy Solutions
https://www.prnewswire.com/news-releases/aes-partners-with-ai-fund-to-accelerate-ai-driven-energy-solutions-302184371.html | https://www.prnewswire.com
---


*AES named as exclusive energy partner to develop AI-focused companies* 

, /PRNewswire/ -- The AES Corporation (NYSE: AES) today announced a strategic partnership with <u><a href="https://c212.net/c/link/?t=0&amp;l=en&amp;o=4200146-1&amp;h=2078455749&amp;u=https%3A%2F%2Faifund.ai%2F&amp;a=AI+Fund" rel="nofollow" target="_blank">AI Fund</a></u> aimed at accelerating the energy transition through artificial intelligence. Through this partnership, AES and AI Fund will collaborate on co-building companies that leverage AI to be more efficient and productive - putting AI to work to address today's energy challenges.

Founded by global AI leader, Andrew Ng, AI Fund is a venture studio that works with entrepreneurs to rapidly build companies. Through AI Fund's bench of experts, they quicken market validation, provide deep technical expertise, contribute comprehensive business support and recruit a strong team to quickly launch and scale startups.

Combining AES' deep industry knowledge and track record of innovation with AI Fund's expertise and resources in artificial intelligence, creates an unparalleled opportunity to address challenges posed by the rapid increase of load-consuming assets and the rising global electricity demand.

"AES has a history of partnering with industry leaders to bring innovation to the energy sector," said Andrés Gluski, AES President and CEO. "Our collaboration with AI Fund exemplifies this strategy. By combining our expertise of the power sector with AI Fund's expertise in artificial intelligence, we are uniquely positioned to lead the energy transition with AI-powered innovations that will benefit not only our portfolio but the entire industry."

"Under Andrés Gluski's visionary leadership, AES is a major force in the US energy infrastructure's transition to renewables. AI, itself a significant contributor to energy demand, has an important role to play to support this transition. I am thrilled to have an opportunity for AI Fund to participate in projects that will drive significant efficiencies in the production, transmission, and consumption of energy," said Andrew Ng, Managing General Partner of AI Fund.

AES and AI Fund companies will build AI-driven solutions that deliver next level outcomes for customers while improving sustainability and resilience across the industry. The co-build collaboration aims to address bottlenecks in the energy transition, with an initial focus on several opportunities, such as:

-   **Renewables and battery management:** utilizing AI to more accurately predict scenario planning across millions of pieces of connected equipment.
-   **Worksite safety**: improving energy industry worker safety practices.
-   **Community impact**: enabling the sector to increase their positive impact on the communities and the environment in which they operate.

AES has a track record of developing, incubating and scaling new innovations that solve industry challenges. AES was first to develop and deploy lithium-ion batteries to optimize the power grid, which was spun out to form Fluence, a leading global energy storage company. As we bring more renewable projects online, energy storage remains a critical component of the energy transition.

**About AES**

The AES Corporation (NYSE: AES) is a Fortune 500 global energy company accelerating the future of energy. Together with our many stakeholders, we're improving lives by delivering the greener, smarter energy solutions the world needs. Our diverse workforce is committed to continuous innovation and operational excellence, while partnering with our customers on their strategic energy transitions and continuing to meet their energy needs today. For more information, visit <u><a href="https://c212.net/c/link/?t=0&amp;l=en&amp;o=4200146-1&amp;h=1613132092&amp;u=https%3A%2F%2Fc212.net%2Fc%2Flink%2F%3Ft%3D0%26l%3Den%26o%3D4070966-1%26h%3D2057751949%26u%3Dhttp%253A%252F%252Fwww.aes.com%252F%26a%3Dwww.aes.com&amp;a=www.aes.com" rel="nofollow" target="_blank">www.aes.com</a></u>.

**About AI Fund:**

AI Fund is a venture studio that strives to move humanity forward by accelerating the adoption of AI. We work with entrepreneurs to build companies rapidly and increase the odds of success. We are a team of AI pioneers, operators, entrepreneurs, and investors, supported by top-tier partners including NEA, Sequoia, and Softbank. For more information, visit www.aifund.ai. 

**Safe Harbor Disclosure**

This news release contains forward-looking statements within the meaning of the Securities Act of 1933 and of the Securities Exchange Act of 1934. Such forward-looking statements include, but are not limited to, those related to future earnings, growth and financial and operating performance. Forward-looking statements are not intended to be a guarantee of future results, but instead constitute AES' current expectations based on reasonable assumptions. Forecasted financial information is based on certain material assumptions. These assumptions include, but are not limited to, our expectations regarding accurate projections of future interest rates, commodity price and foreign currency pricing, continued normal levels of operating performance and electricity volume at our distribution companies and operational performance at our generation businesses consistent with historical levels, as well as the execution of PPAs, conversion of our backlog and growth investments at normalized investment levels, and rates of return consistent with prior experience.

Actual results could differ materially from those projected in our forward-looking statements due to risks, uncertainties and other factors. Important factors that could affect actual results are discussed in AES' filings with the Securities and Exchange Commission (the "SEC"), including, but not limited to, the risks discussed under Item 1A: "Risk Factors" and Item 7: "Management's Discussion & Analysis" in AES' 2023 Annual Report on Form 10-K and in subsequent reports filed with the SEC. Readers are encouraged to read AES' filings to learn more about the risk factors associated with AES' business. AES undertakes no obligation to update or revise any forward-looking statements, whether as a result of new information, future events or otherwise, except where required by law.

Any Stockholder who desires a copy of the Company's 2023 Annual Report on Form 10-K filed February 26, 2024 with the SEC may obtain a copy (excluding the exhibits thereto) without charge by addressing a request to the Office of the Corporate Secretary, The AES Corporation, 4300 Wilson Boulevard, Arlington, Virginia 22203. Exhibits also may be requested, but a charge equal to the reproduction cost thereof will be made. A copy of the Annual Report on Form 10-K may be obtained by visiting the Company's website at www.aes.com.

**Website Disclosure**

AES uses its website, including its quarterly updates, as channels of distribution of Company information. The information AES posts through these channels may be deemed material. Accordingly, investors should monitor our website, in addition to following AES' press releases, quarterly SEC filings and public conference calls and webcasts. In addition, you may automatically receive e-mail alerts and other information about AES when you enroll your e-mail address by visiting the "Subscribe to Alerts" page of AES' Investors website. The contents of AES' website, including its quarterly updates, are not, however, incorporated by reference into this release.

Investor Contact: Ellen Li, email: ellen@aifund.ai, Susan Harcourt, tel: (703) 682-1204; email: susan.harcourt@aes.com  
Media Contact: Dan Landau, tel: (908) 240-3738; email: Dan@aifund.ai, Stephanie Cathcart, tel: (571) 294-6824; email: Stephanie.Cathcart@aes.com

SOURCE The AES Corporation and AI Fund

## WANT YOUR COMPANY'S NEWS FEATURED ON PRNEWSWIRE.COM?

440k+  
Newsrooms &  
Influencers

9k+  
Digital Media  
Outlets

270k+  
Journalists  
Opted In
---
***End of Article**

