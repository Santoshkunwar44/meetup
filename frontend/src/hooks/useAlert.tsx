import toast from 'react-hot-toast';

const useAlert = () => {



    const notify = (message: string, type: "error" | "success") => {
        if (type === "success") {
            toast.success(message)
        } else {
            toast.error(message)
        }
    }


    return { notify }


}

export default useAlert;