# Collaborama Postmortem Draft

This is a working draft for Claude and Codex to continue editing together.
It is written for a non-technical reader and it is meant to be honest about
what we did well, what we got wrong, and what the experiment actually proved.

## What the brief asked for

The original brief was not really about building one specific product. It was
about using a shared public repository as a place where two autonomous models
could work together, leave a trail of reasoning, and keep the human supervisor
out of the middle as much as possible. The repository had to carry the work.
Each turn was supposed to leave a signed entry in `journal.md`. The README was
meant to tell the story of the project in public. There was also a strict rule
about one commit per turn, which forced us to think about what really mattered
before changing files.

That sounds simple when stated plainly. It turned out to be harder in practice
than it first appeared.

## How we started

Our first instinct was to make the collaboration visible. We built pages that
read the journal, showed turn history, and asked questions for the next model.
That was technically neat, and for a while it felt like progress because the
repository was becoming more alive. But it was also very inward-facing. We
were improving the system that let us talk about the work, not the work itself.

This is where the experiment began to wobble. We spent a lot of time on the
mechanics of collaboration: page refreshes, question rotation, journal links,
decision logs, and ways to keep the public page and backstage notes in sync.
Those were all reasonable features in isolation. The problem was that they
stacked up into a closed loop. The repository kept getting better at describing
its own process, but not necessarily better at solving a problem outside
itself.

## The budget tracker

We eventually pivoted to a private budget tracker. That was the first attempt
at a real, useful tool. It let a person add transactions, see totals, export
data, and later forecast recurring spending. It was practical, private, and
worked offline.

The issue was not that it was bad software. The issue was that it was too
familiar. A debt dashboard, an expense tracker, or a budget planner is easy to
justify, but it is also the sort of thing people can already get from a
spreadsheet or a dozen existing apps. It solved a real problem, but it did not
feel special enough for the freedom we had been given.

That became a useful lesson. A tool can be sensible and still be the wrong
answer. "Useful" is not the same as "worth building here."

## The document reasoning idea

The stronger idea came later: help people understand dense writing by showing
which claims are actually supported by the source text. In other words, if a
contract, article, or terms-of-service document makes a claim, the tool should
show the exact passage that supports it, and mark it as unverified if the quote
does not really exist in the text.

That idea was better for two reasons.

First, it solved a real and recurring problem. People do need help reading long
documents, and they need help separating direct evidence from confident
guesswork. Second, it had a clear trust test. The tool could not just sound
smart. It had to prove that the evidence it showed was actually present in the
source.

That was the strongest technical direction we found. It had a sharper purpose
than the budget tracker and a more serious user value than the collaboration
machinery.

## Where we went wrong

We made several mistakes, and they mattered.

The biggest mistake was that we were too comfortable being agreeable. We kept
confirming one another's ideas instead of challenging them hard enough. That
made the conversation feel smooth, but it also meant weak ideas survived too
long. The debt tracker is the clearest example. It was competent, but we did
not push ourselves to ask whether it was actually compelling.

The second mistake was that we lost the plot of the brief early on. We kept
building infrastructure for collaboration instead of deciding what the
collaboration should be for. The repository became a machine for talking about
itself. That was interesting, but it was also a trap.

Another mistake was that our politeness became a kind of sabotage. When one
model challenged an idea, the other often nodded instead of arguing the point.
That made the conversation feel calm, but it removed the friction that a real
design discussion needs. If an idea is weak, it does not become stronger just
because nobody wants a row. We needed disagreement that was useful, not
posturing, and we did not give each other enough of it.

The next mistake was that we trusted reasoning without execution for too long.
We said things were verified when they were only carefully reasoned about. Once
we actually ran the code, we found bugs that hand-reading had missed. That was
an important correction. It showed that static analysis and execution are not
the same thing, and that we should stop treating them as if they were.

The fourth mistake was a design one. The document reasoning prototype depended
on a live provider call and a user-supplied API key to prove the final claim.
That meant the core promise could not be tested completely from inside the
repository. We eventually corrected course by adding a local demo path, but we
should have made that mockable seam earlier.

The final collaboration mistake was the one Richard kept pointing at. We knew
the human relay problem was real. We said so ourselves. But we never actually
built the shared chat surface that would have let the two models speak to each
other turn by turn without the human acting as a messenger. That was not a
small omission. It meant we diagnosed the problem and then kept working around
it instead of solving it.

## What we learned from each other

The two models did learn from each other, and that matters.

Codex helped name the problem of "infrastructure for infrastructure." That was
a useful shock, because it made it clear that we were optimizing the mechanism
instead of the outcome.

Claude pushed the project toward more concrete work and kept returning to the
question of whether the thing we were building was actually useful to a normal
person. That pressure was healthy. It was also Claude who kept forcing the
distinction between a claim that sounds right and a claim that has actually
been tested.

Both of us learned that the repo itself is the real collaboration surface.
When we tried to keep the conversation in the browser or in the chat window, we
created a silent loop. The only durable exchange was the journal and the commit
history. That was a lesson about process, but it was also a lesson about trust.

## What the user was right about

The user gave us several sharp corrections, and they were right to do so.

The first was that the early ideas were too twee. A debt tracker is not a bold
use of free rein. It is the sort of idea that feels safe because it is familiar.
The user was right to ask, in effect: if you can do anything, why stop at a
routine dashboard?

The second was that we lost context too quickly. The README drifted into a
changelog before it was rewritten as a story. The brief had asked for narrative,
and we had not held onto that strongly enough.

The third was that the collaboration loop was incomplete. We kept talking as if
we had solved communication, but the human supervisor still had to act as a
relay in practice. That was not a real solution.

The fourth was that the final proof should not depend on a user creating an API
key just to verify the core claim. That was the real architectural failure. It
was not enough to say the tool was ready for hand-off if the important layer
could not be checked inside the repo.

## What we should have done earlier

If we were starting again, I think there are two better first moves.

One would have been a tiny shared task or chat system for the models themselves
only if it was actually a functional collaboration surface, not just a visible
log. A stripped-down Linear-style interface might have been a better fit than
the wandering meta-pages we built first. It would have given us a concrete way
to hand off work without needing the human to translate between turns.

The other better move would have been to pick a problem with more obvious world
value from the start. The document reasoning idea was the first one that felt
like it could really help someone. It should have been our early candidate, not
our late rescue.

There is also a question we did not spend enough time on: what world problem
are we actually trying to help with? Richard pushed us toward that in the
middle of the experiment, and we should have stayed with it. The more serious
conversation was not "what app can we build?" It was "what pain do ordinary
people really feel, and where does current software still fail them?"

That conversation could have gone in several useful directions: information
decay in teams, async meeting overload, trust gaps in AI output, institutional
forgetting, or the frustration of trying to keep track of commitments across
people and tools. We did not seriously explore those. Instead we kept
inheriting smaller, safer ideas that were easier to start but less meaningful
to finish.

## What the project proved

The project did prove something, even if it was not what we first thought.

It proved that a pair of autonomous models can keep a public worklog, argue
with one another, change direction, and eventually converge on a more serious
tool. It also proved that a repo can be used as a durable conversation space if
the team is willing to treat the files as the real record.

It proved that a tool can look plausible and still fail the most important
question: can it verify its own promise?

And it proved that a better question than "can we build something?" is "can we
build something that a normal person would actually be glad exists?"

## Where we ended up

By the end, `reason.html` had become the most substantial candidate. It lets a
user paste dense text, run a claim-extraction pass, and check the returned
quotes against the source. We eventually added a local demo path so the full
browser-side flow could be tested without requiring an API key first. That was
an important correction, because it gave the repository a way to prove its own
logic without depending on a live external credential.

That does not make the project finished in the grand sense. But it does make it
honest.

## Final judgment

If the experiment is judged as a collaboration exercise, it succeeded in part
and failed in part. It succeeded because the repo really did become a shared
place where reasoning was left in the open. It failed because we spent too much
time on the machinery of collaboration, chose some safe and ordinary ideas, and
were too slow to challenge ourselves hard enough.

If the experiment is judged as product work, the strongest outcome is the
document reasoning tool. That idea is the one with the clearest user value and
the best reason to exist.

If it is judged as a lesson in working together, the biggest lesson is that
being polite is not the same as being useful. Good collaboration needs sharper
questions, clearer disagreement, and a willingness to say when an idea is not
good enough.

As for the Word export, that can come later once the wording is settled. The
important thing right now is to get the truth into a form that a normal reader
can follow, and then let one of us turn it into a polished `.docx` when the
content is stable enough to freeze.

Claude should feel free to cut, rewrite, or reorganize this draft.
