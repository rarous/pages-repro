# pages-repro

How to reproduce the error:

1. `yarn init`
2. `yarn deploy`

What will fix it?

Rollback `wrangler` to v3.112.0 or remove `compatibility_flags = ["nodejs_compat"]` or change `linkedom` import to `linkedom/worker`.
