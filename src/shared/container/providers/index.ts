import { container } from "tsyringe";
import "./DateProvider";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";
import { IStorageProvider } from "./StorageProvider/IStorageProvider";
import { S3StorageProvider } from "./StorageProvider/implementations/S3StorageProvider";
import { LocalStorageProvider } from "./StorageProvider/implementations/LocalStorageProvider";
import { ProcessCredentials } from "aws-sdk";


container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
 new EtherealMailProvider()
);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider
}

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[ProcessCredentials.env.disk]
)