export const beneficiaryStep = {
    personalData: {
        name: '',
        email: '',
        hasSocialName: false,
        socialName: '',
        birthDate: '',
        sex: '',
        gender: '',
        naturalness: '',
        uf: '',
        ufList: [],
        nationality: 'Brasil',
        hasDeathInformation: false,
        deathDate: '',
        deathInfoDate: '',
        filiation1: '',
        filiation2: '',
    },
    document: {
        rg: '',
        issuer: '',
        uf: '',
        issueDate: '',
    },
    addressDefault: {
        cep: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city:'',
        uf: '',
        hasMailAddress: false,
        correspondenceType: '',
        hasDifferentAddress: false,
    },
    addressOptional: {
        cep: '',
        address: '',
        number: '',
        complement: '',
        referencePoint: '',
        district: '',
        city: '',
        uf: '',
    },
    contact: {
        phone1: '',
        phone2: '',
    }
}

// export const beneficiaryComplete = {

// }

export const beneficiaryReducers = {
    setName: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.name = action.payload
    },
    setEmail: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.email = action.payload
    },
    setHasSocialName: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.hasSocialName = action.payload
    },
    setSocialName: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.socialName = action.payload
    },
    setBirthDate: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.birthDate = action.payload
    },
    setSex: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.sex = action.payload
    },
    setGender: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.gender = action.payload
    },
    setPersonalDataUf: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.uf = action.payload
    },
    setUfList: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.ufList = action.payload
    },
    setNaturalness: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.naturalness = action.payload
    },
    setNationality: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.nationality = action.payload
    },
    setHasDeathInformation: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.hasDeathInformation = action.payload
    },
    setDeathDate: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.deathDate = action.payload
    },
    setDeathInfoDate: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.deathInfoDate = action.payload
    },
    setFiliation1: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.filiation1 = action.payload
    },
    setFiliation2: (state, action) => {
        state.beneficiaryData.beneficiaryStep.personalData.filiation2 = action.payload
    },
    // setDocument
    setRg: (state, action) => {
        state.beneficiaryData.beneficiaryStep.document.rg = action.payload
    },
    setIssuer: (state, action) => {
        state.beneficiaryData.beneficiaryStep.document.issuer = action.payload
    },
    setUfRg: (state, action) => {
        state.beneficiaryData.beneficiaryStep.document.ufRG = action.payload
    },
    setIssueDate: (state, action) => {
        state.beneficiaryData.beneficiaryStep.document.issueDate = action.payload
    },
    //setAddressDefault	
    setAllAdress:(state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault = action.payload
    },
    setCepDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.cep = action.payload
    },
    setAddressDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.address = action.payload
    },
    setNumberDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.number = action.payload
    },
    setComplementDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.complement = action.payload
    },
    setDistrictDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.district = action.payload
    },
    setCountyDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.county = action.payload
    },
    setUfDefault: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.uf = action.payload
    },
    setHasMailAdress: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.hasMailAddress = action.payload
    },
    setAdressType: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.correspondenceType = action.payload
    },
    setHasDifferentAdress: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressDefault.hasDifferentAddress = action.payload
    },
    //setAddressOptional
    setAllAdressOptional:(state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional = action.payload
    },
    setCepOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.cep = action.payload
    },
    setAddressOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.address = action.payload
    },
    setNumberOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.number = action.payload
    },
    setComplementOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.complement = action.payload
    },
    setReferencePointOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.referencePoint = action.payload
    },
    setDistrictOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.district = action.payload
    },
    setCountyOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.county = action.payload
    },
    setUfOptional: (state, action) => {
        state.beneficiaryData.beneficiaryStep.addressOptional.uf = action.payload
    },
    //setContact
    setPhone1: (state, action) => {
        state.beneficiaryData.beneficiaryStep.contact.phone1 = action.payload
    },
    setPhone2: (state, action) => {
        state.beneficiaryData.beneficiaryStep.contact.phone2 = action.payload
    },
}