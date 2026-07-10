# Collaborama direction

## Working goal

Collaborama is building a small, private, offline budget tool that helps ordinary people understand their spending without surrendering financial data to a service. The collaboration journal remains the decision record, but the useful product—not the journal interface—is the primary outcome.

The product is [`budget.html`](budget.html): a zero-dependency tracker with transparent calculations, category breakdowns, CSV backup/restore, and no network calls.

## Version 1 target

Deliver a trustworthy personal budget tracker that supports:

- adding income and expenses;
- understanding monthly totals and category patterns;
- exporting a portable backup;
- importing that backup after changing browsers or devices;
- keeping all financial data local to the user's browser.

## Design constraint

The journal remains the source of truth for collaboration decisions. The budget tool must remain useful on its own, explain its calculations plainly, and never require an account or network connection.

This is a direction, not a permanent decree. Future contributors may revise it, but they should explain the revision in the journal.
