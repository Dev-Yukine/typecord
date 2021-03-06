import Collection from 'collection';
import Client from '../Client/Client';
import Role from './Role';
import { UserPayload } from './User';

export interface GuildMemberPayload {
	user: UserPayload;
	nick?: string;
	roles: string[];
	joined_at: Date;
	deaf: boolean;
	mute: boolean;
}

export default class GuildMember {
	public nick?: string;
	public readonly id: string;
	public readonly roles = new Collection<string, Role>();

	constructor(public client: Client, data: GuildMemberPayload) {
		this.id = data.user.id;
	}

	public get user() {
		return this.client.users.get(this.id);
	}
}
