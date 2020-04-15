import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { injectable } from 'inversify';
import { execSync } from 'child_process';
import { IMonocularService } from '../interfaces';

@injectable()
export class LocalMonocularApi implements IMonocularService {
    public async values(chart: any = {}): Promise<any> {
        const { repo, name } = chart.attributes;
        const cmd = `helm inspect values ${repo.name}/${name}`;
        try {
            const data = execSync(cmd);
            console.log('Values: ', data);
            return data;
        } catch (e) {
            console.log("Error: ", e);
            return '';
        }
    }
}
