import {ElLoading} from 'element-plus'


export const useLoading = () => {
    let loading:any = null
    const openLoading = ({lock=false,fullscreen=true,text='加载中'})=> {
        loading = ElLoading.service({
            fullscreen,
            lock,
            text,
            background: 'rgba(0, 0, 0, 0.7)',
        })
    }
    function closeLoading(){
        if(loading){
            loading.close()
        }
    }
    return {
        openLoading,
        closeLoading
    }
}