"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("https://jsonplaceholder.typicode.com/users", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });
            const data = yield res.json();
            const usersFiltered = data.filter((user) => {
                return user.username[0] == "C";
            });
            if (usersFiltered.length != 0) {
                return usersFiltered;
            }
            return "Não há usernames com a letra C";
        }
        catch (error) {
            throw error;
        }
    });
}
fetchUserData()
    .then(data => console.log(data))
    .catch((e) => {
    console.log("Ocorreu um erro --> " + e);
});
