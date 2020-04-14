import 'react-native';
import React from 'react';
import {NativeRouter} from 'react-router-native';
import renderer from 'react-test-renderer';

export default Component => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <NativeRouter>
                    <Component />
                </NativeRouter>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
};
