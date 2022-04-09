

import { addTasktoList } from "../store/action";

const NavigationService = (navigation, dispatch, localdb, toast) => {


    const unsubscribe = navigation.addListener("focus", () => {


        try {
            localdb.createTaskTable().then((res) => {


                localdb
                    .getalltasks()
                    .then((records) => {

                        dispatch(addTasktoList(records));
                    })
                    .catch((error) => {
                        toast.show({ title: error });
                    });



            }).catch((error) => {
                toast.show({ title: error });
            });

        } catch (error) {
            toast.show({ title: error });
        }

    });
    return unsubscribe;


};
export default NavigationService;