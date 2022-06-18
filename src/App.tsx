import React, {FC} from 'react';
import './App.css';
// import {Button, Htag, Input, P, Tag, TextArea} from "./components";
import {withLayout} from "./layout/Layout";
import {CalculateComponent} from "./components/CalculateComponent/CalculateComponent";
import {DescriptionComponent} from "./components/DescriptionComponent/DescriptionComponent";
import {Slider} from "./components/Slider/Slider";

const App: FC = (): JSX.Element => {
    return (
        <>
            <CalculateComponent />
            <DescriptionComponent />
            <Slider />
            {/*<Button appearance={"primary"} className='hello-world'>Нажмика</Button>*/}
            {/*<Button appearance={"ghost"}>Нажмика</Button>*/}
            {/*<Button appearance={"primary"} volume={"standard"}>Нажмика</Button>*/}
            {/*<Button appearance={"primary"} volume={"longer"}>Нажмика</Button>*/}
            {/*<Button appearance={"primary"} volume={"long"}>Нажмика</Button>*/}
            {/*<Button appearance={"ghost"} border={true}>Нажмика</Button>*/}
            {/*<Button appearance={"ghost"} arrow={'standard'}>Нажмика</Button>*/}
            {/*<Button appearance={"ghost"} arrow={'icon'} border={true}></Button>*/}
            {/*<P size="l">Большой</P>*/}
            {/*<P>Средний</P>*/}
            {/*<P size="s">Маленький</P>*/}
            {/*<Tag size="s">Первый</Tag>*/}
            {/*<Tag size="m" color={"red"}>Второй</Tag>*/}
            {/*<Tag size="s" color={"green"}>Третий</Tag>*/}
            {/*<Tag color={"primary"}>Четвертый</Tag>*/}
            {/*<Input placeholder={'тест'}/>*/}
            {/*<TextArea placeholder={'тест'}/>*/}
        </>
    );
};

export default withLayout(App);
