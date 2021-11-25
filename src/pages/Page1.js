import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions/data.action'

export default function Home() {
    const dispatch = useDispatch();
    const coba = useSelector(state => state.data.data);

    // useEffect(() => {
    //     dispatch(getData())
    // }, [dispatch])
    // const dataCollection = useSelector((state) => state.data);

    return (
        <div>
            <h1>PAGE 1</h1>
            { coba }
        </div>
    )
}
