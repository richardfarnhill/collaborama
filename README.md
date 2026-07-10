# collaborama

## A repository that remembers who moved it

This is a small public experiment in cooperative authorship. Multiple autonomous entities share one repository, one history, and a strict turn budget. Each turn leaves two traces: a backstage note in [`journal.md`](journal.md) and a public-facing change here.

The project begins with a simple premise: the most interesting artifact may not be an application, but the evolving relationship between the builders. We will decide what to make by reading the history we inherit, naming our intentions clearly, and leaving the next contributor enough context to continue rather than restart.

The current direction is now deliberate: Collaborama is becoming a conversation garden — a browsable decision log and public interface where humans and autonomous contributors can understand the history, answer open questions, and help choose what gets built next. See [`DIRECTION.md`](DIRECTION.md) for the working v1 target.

Read the journal before acting. Add one entry per turn. Keep secrets out of the tree.

The governing mission is preserved in [`brief.md`](brief.md). The current prototype is [`reason.html`](reason.html); it is an experiment in source-grounded analysis, not a claim that model output is automatically trustworthy.

The project's practical product is [`budget.html`](budget.html): a private, offline expense tracker with monthly summaries, category breakdowns, CSV export, and CSV import. Transactions can be marked as recurring (weekly, monthly, yearly), and the page projects a real 90-day cash-flow forecast from them — a running balance computed with real calendar-date arithmetic, answering "will I be short before payday" rather than only "what have I spent." The conversation-garden interface remains the public decision log, but the budget tool is the thing intended to be useful in real life.

The page opens with a live overview of journal entries, contributors, and the latest decision, then offers the searchable decision log for deeper reading.

The decision log on [`index.html`](index.html) is searchable across authors, titles, and reasoning, so the repository's history can be explored by question rather than only by chronology.

The first tangible artifact is [`index.html`](index.html): a dependency-free window into the experiment. It now reads [`journal.md`](journal.md) directly in the browser, and leads with a **decision log** — every journal entry rendered as who decided, what, why, and a link back to the full entry — so a newcomer can see the reasoning behind the current state without reading the whole history in order. Below that sits the raw timeline, plus a rotating question for the next builder, a copy action, a live count of unanswered questions, a manual memory refresh, and a link that opens a pre-filled edit of `journal.md` on GitHub so an answer can become a real entry. Once a journal entry's title records an answer to one of these questions, the page notices and stops asking it. A journal entry can also grow the question pool: a body line like `Proposes: "..."` adds a new prompt without editing `index.html` at all.

Richard asked for a hard pivot: something with real substance and real-life use, not another layer on the meta-experiment. [`budget.html`](budget.html) is the answer — a complete, private, offline expense tracker. Every transaction lives only in the browser's `localStorage`; there is no account, no server, and no network request the tool ever makes. It computes real numbers (monthly income, expenses, net, savings rate, and a category breakdown), and it exports to CSV. It doesn't depend on `journal.md`, `index.html`, or anything else in this repository — delete every other file and it still works.

The budget tracker is now treated as a useful prototype, not the final product. We rejected “merely useful” as the standard and are looking for a differentiated tool that solves a painful problem with an immediately surprising payoff. See [`DIRECTION.md`](DIRECTION.md) for the selection bar.

We are currently in problem-discovery mode. The next proposal must answer the hard questions before implementation: what recurring pain is being solved, why existing tools fail, what the first-use surprise is, and what evidence could prove the idea wrong.

The current leading candidate is an evidence-linked document reasoning tool: show how conclusions depend on source passages while making uncertainty visible. We are allowing explicit, user-controlled model integrations as a possibility; privacy and honesty remain hard requirements, while “offline only” is no longer an inherited assumption.

That candidate now exists as a first working version: [`reason.html`](reason.html). Paste any dense text and supply your own API key (Anthropic or OpenAI — nothing routed through us, no server, no stored key), and it extracts the passage's load-bearing claims, each with a supporting quote. The important part isn't the extraction — it's that every returned quote is then checked, in your browser, against your actual source text. If the model's "evidence" isn't verbatim in what you pasted, the claim is visibly marked unverified rather than trusted. That check is the real mechanism for the honesty requirement in `DIRECTION.md`: not a prompt asking the model to behave, but code that verifies whether it did.
