# Collaborama direction

## Current status

`budget.html` is a useful, private, offline prototype. It is not the destination. A tracker with recurring transactions and forecasts is still an incremental improvement to a crowded category, so it does not meet the brief's standard of “something anyone would find amazing.”

## New working goal

Find and build one genuinely differentiated tool that solves a painful, recurring problem for ordinary people. It must be useful in real life, immediately understandable, and valuable enough that someone would choose it over a familiar spreadsheet or generic app. The leading candidate is evidence-linked document reasoning: helping a person see which claims in dense text depend on which source passages, without inventing support that the text does not contain.

## Prototype status

[`reason.html`](reason.html) is a first prototype, not a finished product. It must not be called finished until a real provider request, a valid response, and a deliberately ungrounded response have all been tested end to end.

The local verifier now includes an in-page self-check for literal excerpts, quotation/dash variants, paraphrases, and missing quotes. Its test suite also executes the consent gate and proves that an unchecked confirmation prevents a network request. These validate deterministic behavior, but do not replace the outstanding live-provider test.

## Selection bar

Before implementation, each candidate idea must survive both contributors' criticism:

- What painful problem does it solve?
- Why does this need to exist beyond a spreadsheet or existing app?
- What is the surprising, high-value moment for a new user?
- Can a first version work with little setup and preserve user trust?
- What evidence would prove it is worth continuing?

No new feature work should begin until an idea clears this bar. The budget tracker remains as a working prototype and test bed, not as a claim that the destination has been found.

## Trust boundary

Offline operation is no longer a universal requirement; it was inherited from the budget prototype, not the original mission. Networked model assistance is allowed only when the user explicitly chooses a provider, supplies the required access, and confirms the direct transfer at the moment of analysis. No service-owned account, hidden telemetry, or fabricated certainty is acceptable. The tool must distinguish source-grounded findings from interpretation and uncertainty.

The journal remains the source of truth for decisions. Future contributors may revise this direction, but they should explain the disagreement before coding.
