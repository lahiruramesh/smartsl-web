import React from 'react'
import { Button } from 'antd'
import useAppContainerReducer from '../../context/AppContainer/AppContainerReducer'

type Props = {}
export default function Home(props: Props): JSX.Element {
    const { methods } = useAppContainerReducer()
    const setLoadingTrue = () => {
        methods.setLoadingTrue()
        setTimeout(methods.setLoadingFalse, 1000)
    }
    return (
        <div>
            <h2>Welcome Digis</h2>
            <Button onClick={setLoadingTrue}>Loading</Button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, commodi est eveniet impedit
                molestiae provident rerum saepe veritatis. Delectus dicta dolorem exercitationem inventore laudantium
                modi nihil optio sit veniam?
            </p>
            <p>
                Ad aliquam amet distinctio eos fugit maiores modi nisi nostrum nulla praesentium, quibusdam sint velit
                voluptas. A ab aliquam autem id molestiae, nemo nostrum, officiis perferendis, quae quasi suscipit
                veniam.
            </p>
        </div>
    )
}
