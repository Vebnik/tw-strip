import React, {useEffect, useState} from 'react';
import {
    Card,
    Stack,
    CardBody,
    Heading,
    Divider,
    ButtonGroup,
    Button,
    FormControl,
    FormLabel,
    Input, Textarea, Select, useToast, FormHelperText
} from '@chakra-ui/react';
import AppService from "../service/AppService";
import { createToast } from "../utils/alertToast"

export const Form = props => {

    const [category, setCategory] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [selectCategory, setSelectCategory] = useState('')
    const toast = useToast()

    useEffect(() => {
        AppService.getCategory().then(res => {
            if (res.statusText === 'OK') {
                setCategory(res.data)
            }
        })
    }, [])

    const onSubmit = (ev) => {
        const data= {
            title,
            content,
            category: selectCategory,
            symbol_count: content.length
        }

        AppService.createPosts(data)
            .then(res => {
                if (res.statusText === 'Created') {
                    createToast(
                        toast,
                        'Post created.',
                        `ID: ${res.data.id} | Created: ${res.data.created_at.replace('T', ' ').replace(/.([0-9]+?)Z/gmi, '')}`
                    )
                }
            })
            .catch(err => {
                return createToast(
                    toast,
                    'Post not created.',
                    'Please, check all inputs',
                    'error'
                )
            })
    }

    return (
        <Card width={'50%'}>
            <CardBody>
                <Heading size={'md'}>Create Post</Heading>
                <Stack>
                    <FormControl id={'mainForm'} onSubmit={onSubmit}>
                        <FormLabel>Title</FormLabel>
                        <Input onChange={ev => setTitle(ev.target.value)}
                               value={title}
                               type='text' placeholder={'Some title'} marginBottom={2}/>

                        <FormLabel>Content</FormLabel>
                        <Textarea onChange={ev => setContent(ev.target.value)}
                                  value={content}
                                  type='text' placeholder={'Some content'} marginBottom={2}/>
                        <FormHelperText textAlign={'right'}>Symbols: {content.length}</FormHelperText>

                        <FormLabel>Category</FormLabel>
                        <Select onChange={ev => setSelectCategory(ev.target.value)}
                                placeholder='Select category'>
                            {category.map(el => (<option key={el.id} value={el.id}>{el.title}</option>))}
                        </Select>
                    </FormControl>
                </Stack>
            </CardBody>
            <Divider marginY={1}/>
            <ButtonGroup spacing={2} padding={2}>
                <Button onClick={onSubmit} form={'mainForm'} variant={'solid'} colorScheme={'teal'} type={"submit"}>
                    Create
                </Button>
            </ButtonGroup>
        </Card>
    )
};
