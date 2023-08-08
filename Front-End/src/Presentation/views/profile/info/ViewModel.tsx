import React from 'react'
import { RemoveUserUseCase } from '../../../../Domain/useCases/userLocal/RemoveUser';

const ProfileInfoViewModel = () => {

    const removeSession = async () => {
        await RemoveUserUseCase();
    } 

    return {
        removeSession
    }
}

export default ProfileInfoViewModel;
