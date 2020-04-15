import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { ApolloLink } from 'apollo-link';

export const activity = (subject: Subject<any>) =>
    new ApolloLink((operation, forward) => {
        subject.next(true);
        return forward(operation);
    });
