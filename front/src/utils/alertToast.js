

export const createToast = (toast, title, description, status='success') => {
    toast({
        title: title,
        description: description,
        status: status,
        duration: 9000,
        variant: 'top-accent',
        isClosable: true,
        position: 'top'
    })
}