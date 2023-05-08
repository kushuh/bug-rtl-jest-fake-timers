# Demo for an issue with jest fake timers and testing library

```bash
npm run test
```

## Expected behavior

Test fails after 5s (failure is intended). This behavior can be observed when commenting the
`jest.useFakeTimers()` line. in `src/timers.test.jsx`.

![real timers](imgs/real-timers.png)

## Actual behavior

Test fails after less than 100ms (instantly).

![real timers](imgs/fake-timers.png)
