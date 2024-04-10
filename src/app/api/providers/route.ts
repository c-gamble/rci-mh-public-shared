import { NextResponse } from 'next/server';
import type { Provider } from '../../../utils/providerType';
import { connectDB } from '../../../utils/db';
import { ProviderModel } from '../../../models/Provider';

export const dynamic = "force-dynamic";

export async function GET() {

    await connectDB();

    const providers: any[] = await ProviderModel.find({});
    const returnProviders: Provider[] = providers.map(provider => {
        const { _id, name, imageURL, bio, website, zipcode, phone, email, tags, hidden, selected } = provider;
        return { _id, name, imageURL, bio, website, zipcode, phone, email, tags, hidden, selected };
    });

    return NextResponse.json({ providers: returnProviders, status: 200 });
}