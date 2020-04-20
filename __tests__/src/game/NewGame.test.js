import 'react-native';
import React from 'react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-native';
import {mount} from 'enzyme';
import NewGame from '../../../src/game/NewGame';
import renderWithContexts from '../../common/renderWithContexts';
import getByTestId from '../../common/getByTestId';

describe('<NewGame>', () => {
    renderWithContexts(NewGame);

    describe('start button', () => {
        let history;
        let wrapper;
        let pushSpy;

        beforeEach(() => {
            history = createMemoryHistory();
            wrapper = mount(
                <Router history={history}>
                    <NewGame />
                </Router>,
            );
            pushSpy = jest.spyOn(history, 'push');
        });

        describe('clicked after selecting proffession', () => {
            const selectProffession = value => {
                const picker = getByTestId(
                    wrapper,
                    'newGameProffessionPicker',
                ).first();

                picker.props().onValueChange(value);

                wrapper.update();
            };
            const pressStartButton = () => {
                const startButton = getByTestId(
                    wrapper,
                    'newGameStartButton',
                ).first();

                startButton.props().onPress();

                wrapper.update();
            };
            it('should set proper data in application state', () => {});
            it('should navigate to /home', () => {
                pressStartButton();

                expect(pushSpy.mock.calls[0][0]).toBe('/home');
            });
        });
    });
});
