import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Title} from '../components/Title/Title';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Title">
                <Title/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;