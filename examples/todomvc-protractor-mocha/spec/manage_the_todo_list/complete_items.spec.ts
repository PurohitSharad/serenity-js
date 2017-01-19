import { Serenity } from 'serenity-js';
import { Actors, CompleteATodoItem, ItemStatus, Start } from 'todomvc-model';

import { Ensure } from '../../src/tasks/ensure';

describe('Managing a Todo List', function() {
    this.timeout(10000);

    const stage = Serenity.callToStageFor(new Actors());

    describe('James', () => {

        it('can mark the items he\'s done with as completed', () => stage.theActorCalled('James').attemptsTo(
            Start.withATodoListContaining([ 'Walk the dog' ]),
            CompleteATodoItem.called('Walk the dog'),
            Ensure.itemIsMarkedAsCompleted('Walk the dog'),
        ));
    });
});
