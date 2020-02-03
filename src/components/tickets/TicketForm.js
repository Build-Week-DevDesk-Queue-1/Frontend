import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import { postTicket } from '../../actions/TicketsAction';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Header from "../Header/Header.js";
import StudentNavBar from '../Navbar/StudentNavBar';
import Footer from "../Footer/Footer";
import { ContainerDiv, ContentDiv } from "../../Style/StudentAppStyle";
import{MainContainer,ErrorP,Select,Label,Form,Input,CategoryWrapper,DescriptionInput,AttemptInput,SubmitInput,StyledLink} from '../../Style/TicketFormStyle';



function TicketForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm(); 
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/categories")
        .then(res => {
            console.log(`categories`, res.data);
            setCategories(res.data)
        })
        .catch(err => {
            console.log(`error`, err);
        })
    }, [])

    const onSubmit = data => {
        console.log("Starting to submit a ticket", data);
        dispatch(postTicket(data, history.push('/dashboard')));
    }

    return (
        
        <ContainerDiv>
            <Header/>
            <StudentNavBar />
            <ContentDiv>
            <MainContainer> 
                <h1 className="form-h1">Submit a Ticket</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Submitting a ticket: Title */}
                    <Input 
                        name="title" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="Title"
                    />
                    {errors.title && <ErrorP>A title is required!</ErrorP>}
                    {/* Submitting a ticket: Category */}
                    <CategoryWrapper>
                    <Label className="form-label">Category:</Label>
                        <Select name="category_id" ref={register({ required: true })}>
                            {categories.map(category => <option value={category.id}>{category.name}</option>)}
                        </Select>
                        {errors.category && <ErrorP>Please select a category!</ErrorP>}
                    </CategoryWrapper>
                    {/* Submitting a ticket: Description */}
                    <DescriptionInput
                        name="description"
                        ref={register({ required: true })}
                        className="form-input"
                        placeholder="Description"
                    />
                    {errors.description && <ErrorP>Please enter a description.</ErrorP>}
                    {/* Submitting a ticket: Attempt */}
                    <AttemptInput
                        name="tried"
                        ref={register({ required: true })}
                        className="form-input"
                        placeholder="Attempt"
                    />
                    {errors.attempt && <ErrorP>Tell us if this is your first attempt, second attempt, etc.</ErrorP>}
                    {/* Submitting the ticket */}
                    <SubmitInput type="submit" />
                    <StyledLink to="/dashboard">Go Back</StyledLink>
                </Form>
            </MainContainer>
        </ContentDiv>
        <Footer/>
        </ContainerDiv>
    );
}

export default TicketForm;