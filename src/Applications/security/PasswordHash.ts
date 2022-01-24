interface PasswordHash {
  hash: (plaintext: string) => Promise<string>;
  comparePasswordd: (plaintext: string, passwordHash: string) => Promise<boolean>;
}

export default PasswordHash;