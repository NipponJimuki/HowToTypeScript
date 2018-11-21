// middlewares/index.ts
import { applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import changePowerState from './itemList';

const logger: Middleware[] = [];
if (process.env.NODE_ENV !== 'production') {
    logger.push(createLogger());
}

const middlewares = applyMiddleware(changePowerState, ...logger);

export default middlewares;
