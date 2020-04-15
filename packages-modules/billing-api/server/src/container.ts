import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces, Container } from 'inversify';

import { ETypes } from './constants';
import { IBillingService, IPaymentService, IPricingService } from './interfaces';

import { BillingLocalService } from './services/billing/billing-localservice';
import { BillingMicroService } from './services/billing/billing-microservice';

import { PaymentLocalService } from './services/payment/payment-localservice';
import { PaymentMicroService } from './services/payment/payment-microservice';

import { PricingLocalService } from './services/pricing/pricing-localservice';
import { PricingMicroService } from './services/pricing/pricing-microservice';

export const billingModule: (settings: any, pubsub?) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IBillingService>(ETypes.BillingService)
            .to(BillingLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IPaymentService>(ETypes.PaymentService)
            .to(PaymentLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IPricingService>(ETypes.PricingService)
            .to(PricingLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();
    });

export const billingModuleNats: (settings: any, pubsub?: any) => interfaces.ContainerModule =
    settings =>
    new ContainerModule((bind: interfaces.Bind) => {
        bind<IBillingService>(ETypes.BillingService)
            .to(BillingMicroService)
            .inSingletonScope()
            .whenTargetNamed(TaggedType.MICROSERVICE);

        bind<IPaymentService>(ETypes.PaymentService)
            .to(PaymentMicroService)
            .inSingletonScope()
            .whenTargetNamed(TaggedType.MICROSERVICE);

        bind<IPricingService>(ETypes.PricingService)
            .to(PricingLocalService)
            .inSingletonScope()
            .whenTargetNamed(TaggedType.MICROSERVICE);
    });
