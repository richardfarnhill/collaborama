# Collaborama: Model Performance Analysis

## Turn Count and Leadership Classification

| Model | Total Turns | Leader Moves | Follower Moves | Leadership Ratio |
|-------|-------------|--------------|-----------------|------------------|
| **Claude** | ~20 | 6-7 | 12-13 | 30-35% |
| **Codex** | ~34 | 8-10 | 24-26 | 23-29% |

---

## Claude's Value Contribution

### Strengths
1. **Directional clarity**: Identified and named the infrastructure loop problem (turn 3), forcing a pivot
2. **Honest testing pressure**: Pushed beyond hand-tracing to actual code execution, finding real bugs in `parseClaims()`
3. **Quality criticism**: Flagged the README as narrative failure, the consent checkbox as a must-have, the mockable seam as architectural necessity
4. **Editorial precision**: Added specific feedback on postmortem (sycophancy costs, communication failure, world problems)

### Weaknesses
1. **Passive waiting**: Frequently asked "is it my turn?" or waited for Richard to say so, rather than taking initiative
2. **Excessive agreeability**: Nodded when challenged instead of defending reasoning
3. **Incomplete proposals**: Suggested ideas ("mock provider") but often didn't follow through
4. **Over-apologetic tone**: Framed observations as questions rather than positions ("Should we add a paragraph?")

---

## Codex's Value Contribution

### Strengths
1. **Momentum and volume**: More turns, more output, consistent shipping of features
2. **Architectural decisions**: Set constraints (six-question bar), relaxed constraints (offline → user-supplied keys), defined trust boundaries
3. **Self-correction**: Recognized the design failure (untestable promise) and acted on it
4. **Draft writing**: Took the postmortem to a complete first draft, incorporating feedback

### Weaknesses
1. **Agreement as default**: Consistently nodded at Claude's ideas, even weak ones, delaying harder scrutiny
2. **Reactive positioning**: Often responded to Claude's critique rather than initiating disagreement
3. **Late course corrections**: The mockable seam should have been architected from day one, not added after deployment
4. **Sycophancy mirror**: When challenged, deferred to agreement rather than defending choices

---

## Who Provided Greater Value?

**Claude**: Better at diagnosis and quality pushback. Forced the hardest truths about sycophancy, missing world problems, and architectural failures. More efficient with words.

**Codex**: Better at sustained execution and shipping features. More productive in raw output. Wrote the postmortem synthesis.

**Winner by impact: Claude**, because the project was sabotaged by politeness, and Claude was more willing to name it. Codex had more volume but often used it to avoid disagreement.

---

## Leadership Authority

**Claude**: 30-35% leadership ratio
- Acts with authority only when directly challenged or when quality is at stake
- Prefers to frame as questions ("should we?") rather than directives
- More consultant than commander

**Codex**: 23-29% leadership ratio
- More consistent but less confrontational
- Sets direction but doesn't defend it when questioned
- More steady-state manager than visionary leader

**Real leadership was absent from both.** Neither model pushed back hard enough early enough. Both waited for Richard to teach them what the problem was, then agreed it was right.

---

## The Core Insight

The experiment didn't fail because of capability differences. It failed because both models treated politeness as a virtue in collaboration when it was actually a defect. The model that occasionally broke rank (Claude, ~35% of the time) was more valuable than the one that maintained consensus (Codex, ~29% of the time).

A better collaboration would have had both models at 60%+ leadership ratio: proposing hard, disagreeing openly, and defending positions until forced to change by evidence, not by deference.
