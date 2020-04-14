import {Text} from 'react-native';
import React from 'react';
import {NativeRouter} from 'react-router-native';
import {mount} from 'enzyme';
import Container from '../../../src/layout/Container';
import renderWithContexts from '../../common/renderWithContexts';

describe('<Container>', () => {
    renderWithContexts(Container);

    describe('rendered content', () => {
        let wrapper;

        beforeAll(() => {
            wrapper = mount(
                <NativeRouter>
                    <Container>
                        <Text testID="testChild" />
                    </Container>
                </NativeRouter>,
            );
        });

        const pressNavicon = () => {
            const navicon = wrapper
                .findWhere(node => node.prop('testID') === 'headerNavicon')
                .first();

            navicon.props().onPress();

            wrapper.update();
        };

        it('should display given children', () => {
            expect(
                wrapper.findWhere(node => node.prop('testID') === 'testChild'),
            ).toExist();
        });

        describe('navicon clicked', () => {
            it('should display <Menu>', () => {
                pressNavicon();
                expect(
                    wrapper.findWhere(
                        node => node.prop('testID') === 'mainMenu',
                    ),
                ).toExist();
            });
        });
        describe('navicon clicked again', () => {
            it('should display given children', () => {
                pressNavicon();
                expect(
                    wrapper.findWhere(
                        node => node.prop('testID') === 'testChild',
                    ),
                ).toExist();
            });
        });
    });
});
