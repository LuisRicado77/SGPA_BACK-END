export enum ERROR_MESSAGE {
    NOT_CREATED = "ERR_001",
    NOT_FOUND = "ERR_002",
    NOT_SEND_ERROR = "ERR_003",
    
    // Errores de dominio
    INVALID_DOMAIN_STATE = "ERR_004",
    BUSINESS_RULE_VIOLATION = "ERR_005",
  
    // Errores de infraestructura
    DATABASE_CONNECTION_FAILED = "ERR_006",
    SERVICE_UNAVAILABLE = "ERR_007",
  
    // Errores de aplicación
    INVALID_INPUT = "ERR_008",
    UNAUTHORIZED_ACCESS = "ERR_009"


}