import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { remove } = new UserLocalRepositoryImpl();

export const RemoveUserUseCase = async () => {
    return await remove();
}