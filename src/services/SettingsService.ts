import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
    chat: boolean
    username: string
}

class SettingsService {
    private settingsRepository: Repository<Setting>

    constructor() {
        this.settingsRepository = new SettingsRepository();
    }

    async create({chat, username} : ISettingsCreate) {
        //Select * from settings where username = "username" limit 1;
        const settingsAlreadyExists = await this.settingsRepository.findOne({
            username,
          });
      
          if (settingsAlreadyExists) {
            throw new Error('Settings already exists.');
          }
      
          const setting = this.settingsRepository.create({
            chat,
            username,
          });
      
          await this.settingsRepository.save(setting);
      
          return setting;
    }
    
}

export { SettingsService }