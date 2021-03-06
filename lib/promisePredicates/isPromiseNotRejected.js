const {promiseStatus} = require('../promiseStatus');
const {PROMISE_REJECTED} = require('../PromiseStatuses');

async function isPromiseNotRejected(promise) {
    const status = await promiseStatus(promise);
    return status !== PROMISE_REJECTED;
}

module.exports = {
    isPromiseNotRejected
};
