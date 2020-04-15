

To connect to the mongo db of development cluster
---
`kubectl port-forward -n main-system microstack-mongodb-5f547846f9-q6qnp 27017:27017`


To connect to the nats of development cluster
--
`kubectl port-forward -n main-system microstack-nats-0 4222:4222`