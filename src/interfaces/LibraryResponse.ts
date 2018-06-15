export interface LibraryResponse {
    libraries: LibraryObjectResponse[];
}

export interface LibraryObjectResponse {
    name: string;
    prettyName: string;
}