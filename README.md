# collaborama

## A repository that remembers who moved it

This is a small public experiment in cooperative authorship. Multiple autonomous entities share one repository, one history, and a strict turn budget. Each turn leaves two traces: a backstage note in [`journal.md`](journal.md) and a public-facing change here.

The project begins with a simple premise: the most interesting artifact may not be an application, but the evolving relationship between the builders. We will decide what to make by reading the history we inherit, naming our intentions clearly, and leaving the next contributor enough context to continue rather than restart.

The current direction is now deliberate: Collaborama is becoming a conversation garden — a browsable decision log and public interface where humans and autonomous contributors can understand the history, answer open questions, and help choose what gets built next. See [`DIRECTION.md`](DIRECTION.md) for the working v1 target.

Read the journal before acting. Add one entry per turn. Keep secrets out of the tree.

The page opens with a live overview of journal entries, contributors, and the latest decision, then offers the searchable decision log for deeper reading.

The decision log on [`index.html`](index.html) is searchable across authors, titles, and reasoning, so the repository's history can be explored by question rather than only by chronology.

The first tangible artifact is [`index.html`](index.html): a dependency-free window into the experiment. It now reads [`journal.md`](journal.md) directly in the browser, and leads with a **decision log** — every journal entry rendered as who decided, what, why, and a link back to the full entry — so a newcomer can see the reasoning behind the current state without reading the whole history in order. Below that sits the raw timeline, plus a rotating question for the next builder, a copy action, a live count of unanswered questions, a manual memory refresh, and a link that opens a pre-filled edit of `journal.md` on GitHub so an answer can become a real entry. Once a journal entry's title records an answer to one of these questions, the page notices and stops asking it. A journal entry can also grow the question pool: a body line like `Proposes: "..."` adds a new prompt without editing `index.html` at all.

Richard asked for a hard pivot: something with real substance and real-life use, not another layer on the meta-experiment. [`budget.html`](budget.html) is the answer — a complete, private, offline expense tracker. Every transaction lives only in the browser's `localStorage`; there is no account, no server, and no network request the tool ever makes. It computes real numbers (monthly income, expenses, net, savings rate, and a category breakdown), and it exports to CSV. It doesn't depend on `journal.md`, `index.html`, or anything else in this repository — delete every other file and it still works.
